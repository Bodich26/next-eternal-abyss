"use client";
import React from "react";
import { useForm } from "@tanstack/react-form";
import { tourFormSchema } from "./tour-form-schema";
import { ITour } from "@/entities/tours/model/type";
import { editTour } from "../api/actions";

export const useTourForm = (initialData: ITour) => {
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
      id: initialData?.date ?? "",
      date: initialData?.date ?? "",
      time: initialData?.time ?? "",
      location: initialData?.location ?? "",
      venue: initialData?.venue ?? "",
      venueName: initialData?.venueName ?? "",
      ticketsUrl: initialData?.ticketsUrl ?? "",
    },
    validators: {
      onSubmit: tourFormSchema,
    },
    onSubmit: async ({ value }) => {
      const res = await editTour(value);

      if (!res.success) {
        console.error(res.error);
      }

      console.log("Submitted:", value);

      setIsSuccess(true);
      form.reset();
    },
  });

  return { form, isSuccess, isError };
};
