"use client";
import { Buttons, Inputs } from "@/shared";
import { useNewsForm } from "../model/use-news-from";

export const NewsForm = () => {
  const { form, isSuccess, isError } = useNewsForm();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
      className="w-[504px] flex flex-col justify-center items-center gap-6 max-sm:w-full"
    >
      <form.Field
        name="email"
        children={(field) => (
          <>
            <Inputs
              id="email"
              type="email"
              placeholder="example@email.com"
              className="w-full"
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
            />
            {field.state.meta.errors.length > 0 && (
              <em className="text-red-400/80 text-sm">
                {field.state.meta.errors[0]?.message}
              </em>
            )}
          </>
        )}
      />
      <form.Field
        name="firstName"
        children={(field) => (
          <>
            <Inputs
              id="firstName"
              type="text"
              placeholder="Введите ваше имя"
              className="w-full"
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
            />
            {field.state.meta.errors.length > 0 && (
              <em className="text-red-400/80 text-sm">
                {field.state.meta.errors[0]?.message}
              </em>
            )}
          </>
        )}
      />
      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
        children={([canSubmit, isSubmitting]) => (
          <Buttons
            as="button"
            type="submit"
            text={isSubmitting ? "Отправка..." : "Подписаться"}
            variant="primary"
            className="w-full"
            disabled={!canSubmit || isSubmitting}
          />
        )}
      />
      {isSuccess && (
        <div className="text-green-400 text-sm text-center">
          Вы успешно подписались 🎉
        </div>
      )}
      {isError && (
        <div className="text-red-400/80 text-sm text-center">{isError}</div>
      )}
    </form>
  );
};
