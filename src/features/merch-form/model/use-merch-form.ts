"use client";
import React from "react";
import { useForm } from "@tanstack/react-form";
import { merchFormSchema } from "./merch-form-schema";
import { IMerch } from "@/entities/merch/model/type";
import { editMerch } from "../api/actions";

export const useMerchForm = (initialData: IMerch) => {
  const [successMessage, setSuccessMessage] = React.useState<string | null>(
    null,
  );
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const form = useForm({
    defaultValues: {
      id: initialData.id,
      title: initialData?.title ?? "",
      price: initialData?.price ?? "",
      shortDescription: initialData?.shortDescription ?? "",
      sizes: initialData?.sizes ?? [],
      image: initialData?.image ?? "",
    },
    validators: {
      onSubmit: merchFormSchema,
    },
    onSubmit: async ({ value }) => {
      setErrorMessage(null);
      setSuccessMessage(null);

      const res = await editMerch(value);

      if (!res.success) {
        setErrorMessage(res.error);
        return;
      }

      console.log("Submitted:", value);
      setSuccessMessage(res.message);
      form.reset();
    },
  });

  return {
    form,
    successMessage,
    errorMessage,
  };
};
