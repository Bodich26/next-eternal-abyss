"use client";
import React from "react";
import { ShowErrors } from "@/shared";

export default function ErrorsPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    console.error(error);
  }, [error]);

  return <ShowErrors error={error} reset={reset} />;
}
