"use client";
import React from "react";
import { useForm } from "@tanstack/react-form";
import { IAlbum } from "@/entities/albums/model/type";
import { albumFormSchema } from "./album-form-schema";
import { editAlbum } from "../api/actions";

export const useAlbumForm = (initialData: IAlbum) => {
  const [successMessage, setSuccessMessage] = React.useState<string | null>(
    null,
  );
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const form = useForm({
    defaultValues: {
      id: initialData.id,
      title: initialData?.title ?? "",
      releaseYear: initialData?.releaseYear ?? "",
      shortDescription: initialData?.shortDescription ?? "",
      tracklist: initialData?.tracklist ?? [],
      image: initialData?.image ?? "",
    },
    validators: {
      onSubmit: albumFormSchema,
    },
    onSubmit: async ({ value }) => {
      setErrorMessage(null);
      setSuccessMessage(null);

      const res = await editAlbum(value);

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
