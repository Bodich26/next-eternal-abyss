"use client";
import { Buttons, Inputs } from "@/shared";
import { useAlbumForm } from "../model/use-album-form";
import { IAlbum } from "@/entities/albums/model/type";
import { useToggleTrackAlbum } from "../model/use-toggle-track-album";

type Props = {
  initialData: IAlbum;
};

export const AlbumForm = ({ initialData }: Props) => {
  const { form, isError, isSuccess } = useAlbumForm(initialData);
  const { trackInput, setTrackInput, handleAddTrack, handleRemoveTrack } =
    useToggleTrackAlbum();

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
                  <label htmlFor="title" className="text-sm text-whites-100/60">
                    Название альбома
                  </label>
                  <Inputs
                    id="title"
                    type="text"
                    required
                    placeholder="Shadows of the Void"
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
                  <label
                    htmlFor="releaseYear"
                    className="text-sm text-whites-100/60"
                  >
                    Год релиза
                  </label>
                  <Inputs
                    id="releaseYear"
                    type="number"
                    required
                    placeholder="2026"
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
                <label
                  htmlFor="shortDescription"
                  className="text-sm text-whites-100/60"
                >
                  Краткое описание
                </label>
                <Inputs
                  id="shortDescription"
                  type="text"
                  required
                  placeholder="Дебютный полноформатник, полный хаоса и брейкдаунов"
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
                  <label htmlFor="image" className="text-sm text-whites-100/60">
                    Картинка альбома
                  </label>
                  <Inputs
                    id="image"
                    type="text"
                    required
                    placeholder="/albums/shadow.jpg"
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
                  <label
                    htmlFor="tracklist"
                    className="text-sm text-whites-100/60"
                  >
                    Название трека
                  </label>
                  <div className="flex justify-between gap-4">
                    <Inputs
                      id="tracklist"
                      type="text"
                      placeholder="Abyssal Throne"
                      value={trackInput}
                      onBlur={field.handleBlur}
                      onChange={(e) => setTrackInput(e.target.value)}
                    />
                    <Buttons
                      onClick={() =>
                        handleAddTrack(field.state.value, field.handleChange)
                      }
                      className="px-3! py-2! w-full"
                      type="button"
                      text="Добавить"
                      as="button"
                      variant="primary"
                      disabled={!trackInput.trim()}
                    />
                  </div>
                  {field.state.meta.errors.length > 0 && (
                    <em className="text-red-400/80 text-sm">
                      {field.state.meta.errors[0]?.message}
                    </em>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-sm text-whites-100/60">
                    Список добавленных треков:
                  </h4>
                  <ul className="flex flex-col gap-1">
                    {field.state.value.length === 0 ? (
                      <p>В альбоме нет треков</p>
                    ) : (
                      field.state.value.map((track, index) => (
                        <li key={index}>{track}</li>
                      ))
                    )}
                  </ul>
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
