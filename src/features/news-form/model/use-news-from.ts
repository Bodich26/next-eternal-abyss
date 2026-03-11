"use client";
import React from "react";
import { useForm } from "@tanstack/react-form";
import { newsFormSchema } from "../model/news-form-schema";
import { newsSubscription } from "../api/actions";

export const useNewsForm = () => {
  const [successMessage, setSuccessMessage] = React.useState<string | null>(
    null,
  );
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const form = useForm({
    defaultValues: {
      email: "",
      firstName: "",
    },
    validators: {
      onSubmit: newsFormSchema,
    },
    onSubmit: async ({ value }) => {
      setErrorMessage(null);
      setSuccessMessage(null);

      const res = await newsSubscription(value);

      if (!res.success) {
        setErrorMessage(res.error);
        return;
      }

      console.log("Submitted:", value);
      setSuccessMessage(res.message);
      form.reset();
    },
  });

  return { form, successMessage, errorMessage };
};
