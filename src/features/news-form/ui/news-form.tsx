"use client";
import { useForm } from "@tanstack/react-form";
import { Buttons, Inputs } from "@/shared";
import { newsFormSchema } from "../model/news-form-schema";

export const NewsForm = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      firstName: "",
    },
    validators: {
      onChange: newsFormSchema,
    },
    onSubmit: async ({ value }) => {
      console.log("Submitted:", value);
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
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
              placeholder="example@mail.com"
              className="w-full"
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
            />
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
              placeholder="Введите псевдоним"
              className="w-full"
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
            />
          </>
        )}
      />
      <Buttons
        as="button"
        type="submit"
        text="Подписаться"
        variant="primary"
        className="w-full"
        disabled={form.state.isSubmitting}
      />
      {form.state.isSubmitted && (
        <p className="text-green-500">Форма отправлена!</p>
      )}
    </form>
  );
};
