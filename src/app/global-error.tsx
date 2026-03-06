"use client";
import React from "react";
import { ShowErrors } from "@/shared";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="ru">
      <body className="antialiased min-h-screen flex flex-col">
        <main className="pt-[68px] flex-1">
          <ShowErrors error={error} reset={reset} />
        </main>
      </body>
    </html>
  );
}
