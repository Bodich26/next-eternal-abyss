"use client";
import React from "react";
import { useForm } from "@tanstack/react-form";
import { newsFormSchema } from "../model/news-form-schema";

export const useNewsForm = () => {
  const [isSuccess, setIsSuccess] = React.useState<boolean>(false);
  const [isError, setIsError] = React.useState<string>("");

  React.useEffect(() => {
    if (!isSuccess) return;

    const timer = setTimeout(() => {
      setIsSuccess(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [isSuccess]);

  const form = useForm({
    defaultValues: {
      email: "",
      firstName: "",
    },
    validators: {
      onSubmit: newsFormSchema,
    },
    onSubmit: async ({ value }) => {
      await new Promise((res) => setTimeout(res, 1000));

      console.log("Submitted:", value);

      setIsSuccess(true);
      form.reset();
    },
  });

  return { form, isSuccess, isError };
};
