"use client";
import { Buttons, Inputs } from "@/shared";
import { useTourForm } from "../model/use-tour-from";
import { ITour } from "@/entities/tours/model/type";

type Props = {
  initialData: ITour;
};

export const TourForm = ({ initialData }: Props) => {
  const { form, isError, isSuccess } = useTourForm(initialData);

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
            name="date"
            children={(field) => (
              <>
                <div className="flex flex-col gap-2">
                  <label htmlFor="date" className="text-sm text-whites-100/60">
                    Дата
                  </label>
                  <Inputs
                    id="date"
                    type="text"
                    required
                    placeholder="15 Марта 2026"
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
            name="time"
            children={(field) => (
              <>
                <div className="flex flex-col gap-2">
                  <label htmlFor="time" className="text-sm text-whites-100/60">
                    Время
                  </label>
                  <Inputs
                    id="time"
                    type="text"
                    required
                    placeholder="20:00"
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
        </div>
        <form.Field
          name="location"
          children={(field) => (
            <>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="location"
                  className="text-sm text-whites-100/60"
                >
                  Локация (Город, Страна)
                </label>
                <Inputs
                  id="location"
                  type="text"
                  required
                  placeholder="Берлин, Германия"
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
            name="venue"
            children={(field) => (
              <>
                <div className="flex flex-col gap-2">
                  <label htmlFor="venue" className="text-sm text-whites-100/60">
                    Тип площадки
                  </label>
                  <Inputs
                    id="venue"
                    type="text"
                    required
                    placeholder="Клуб"
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
            name="venueName"
            children={(field) => (
              <>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="venueName"
                    className="text-sm text-whites-100/60"
                  >
                    Название площадки
                  </label>
                  <Inputs
                    id="venueName"
                    type="text"
                    required
                    placeholder="Black Void"
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
        </div>
        <form.Field
          name="ticketsUrl"
          children={(field) => (
            <>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="ticketsUrl"
                  className="text-sm text-whites-100/60"
                >
                  Ссылка на билеты
                </label>
                <Inputs
                  id="ticketsUrl"
                  type="url"
                  required
                  placeholder="https://example.com/tickets/berlin"
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
