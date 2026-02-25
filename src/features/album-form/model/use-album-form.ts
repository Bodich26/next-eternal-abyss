"use client";
import React from "react";
import { useForm } from "@tanstack/react-form";
import { IAlbum } from "@/entities/albums/model/type";
import { albumFormSchema } from "./album-form-schema";

export const useAlbumForm = (initialData: IAlbum) => {
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
      releaseYear: initialData?.releaseYear ?? "",
      shortDescription: initialData?.shortDescription ?? "",
      tracklist: initialData?.tracklist?.join("\n") ?? "",
      image: initialData?.image ?? "",
    },
    validators: {
      onSubmit: albumFormSchema,
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
