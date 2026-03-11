"use client";
import React from "react";
import { useForm } from "@tanstack/react-form";
import { tourFormSchema } from "./tour-form-schema";
import { ITour } from "@/entities/tours/model/type";
import { editTour } from "../api/actions";

export const useTourForm = (initialData: ITour) => {
  const [successMessage, setSuccessMessage] = React.useState<string | null>(
    null,
  );
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const form = useForm({
    defaultValues: {
      id: initialData.id,
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
      setErrorMessage(null);
      setSuccessMessage(null);

      const res = await editTour(value);

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
