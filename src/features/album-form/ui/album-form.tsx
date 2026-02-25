"use client";
import { Buttons, Inputs, Textareas } from "@/shared";
import { useAlbumForm } from "../model/use-album-form";
import { IAlbum } from "@/entities/albums/model/type";

type Props = {
  initialData: IAlbum;
};

export const AlbumForm = ({ initialData }: Props) => {
  const { form, isError, isSuccess } = useAlbumForm(initialData);
  return (
    <form
      className="max-w-4xl mx-auto"
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      <div className="rounded-md main-gradient-90-deg shadow-block p-8 flex flex-col gap-8">
        <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
          <form.Field
            name="title"
            children={(field) => (
              <>
                <div className="flex flex-col gap-2">
                  <Inputs
                    id="title"
                    type="text"
                    placeholder="Shadows of the Void"
                    label="Название альбома"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  {field.state.meta.errors.length > 0 && (
                    <em className="text-red-400/80 text-sm">
                      {field.state.meta.errors[0]?.message}
                    </em>
                  )}
                </div>
              </>
            )}
          />
          <form.Field
            name="releaseYear"
            children={(field) => (
              <>
                <div className="flex flex-col gap-2">
                  <Inputs
                    id="releaseYear"
                    type="number"
                    placeholder="2026"
                    label="Год релиза"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(Number(e.target.value))}
                  />
                  {field.state.meta.errors.length > 0 && (
                    <em className="text-red-400/80 text-sm">
                      {field.state.meta.errors[0]?.message}
                    </em>
                  )}
                </div>
              </>
            )}
          />
        </div>
        <form.Field
          name="shortDescription"
          children={(field) => (
            <>
              <div className="flex flex-col gap-2">
                <Inputs
                  id="shortDescription"
                  type="text"
                  placeholder="Дебютный полноформатник, полный хаоса и брейкдаунов"
                  label="Краткое описание"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {field.state.meta.errors.length > 0 && (
                  <em className="text-red-400/80 text-sm">
                    {field.state.meta.errors[0]?.message}
                  </em>
                )}
              </div>
            </>
          )}
        />
        <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
          <form.Field
            name="image"
            children={(field) => (
              <>
                <div className="flex flex-col gap-2">
                  <Inputs
                    id="image"
                    type="text"
                    placeholder="/albums/shadow.jpg"
                    label="Картинка альбома"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  {field.state.meta.errors.length > 0 && (
                    <em className="text-red-400/80 text-sm">
                      {field.state.meta.errors[0]?.message}
                    </em>
                  )}
                </div>
              </>
            )}
          />
          <form.Field
            name="tracklist"
            children={(field) => (
              <>
                <div className="flex flex-col gap-2">
                  <Textareas
                    id="tracklist"
                    placeholder={`
                      
                      `}
                    label="Список треков"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className=" placeholder:text-start"
                  />
                  {field.state.meta.errors.length > 0 && (
                    <em className="text-red-400/80 text-sm">
                      {field.state.meta.errors[0]?.message}
                    </em>
                  )}
                </div>
              </>
            )}
          />
        </div>
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <div className="flex gap-4 pt-6 justify-between">
              <Buttons
                className="min-w-[210px]"
                type="submit"
                text={isSubmitting ? "Сохранение..." : "Сохранить изменения"}
                as="button"
                variant="primary"
                disabled={!canSubmit || isSubmitting}
              />
              <Buttons
                type="button"
                text="Удалить тур"
                as="button"
                variant="danger"
                disabled={!canSubmit || isSubmitting}
              />
            </div>
          )}
        />
      </div>
      {isSuccess && (
        <div className="text-green-400 text-sm text-center">
          Тур успешно сохранен!
        </div>
      )}
      {isError && (
        <div className="text-red-400/80 text-sm text-center">{isError}</div>
      )}
    </form>
  );
};
