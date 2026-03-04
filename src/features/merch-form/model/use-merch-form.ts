"use client";
import React from "react";
import { useForm } from "@tanstack/react-form";
import { merchFormSchema } from "./merch-form-schema";
import { IMerch } from "@/entities/merch/model/type";

export const useMerchForm = (initialData: IMerch) => {
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
      title: initialData?.title ?? "",
      price: initialData?.price ?? 0,
      shortDescription: initialData?.shortDescription ?? "",
      sizes: initialData?.sizes ?? [],
      image: initialData?.image ?? "",
    },
    validators: {
      onSubmit: merchFormSchema,
    },
    onSubmit: async ({ value }) => {
      await new Promise((res) => setTimeout(res, 1000));

      console.log("Submitted:", value);

      setIsSuccess(true);
      form.reset();
    },
  });

  return {
    form,
    isSuccess,
    isError,
  };
};
