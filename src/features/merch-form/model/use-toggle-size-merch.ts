"use client";
import { TSizeMerch } from "@/entities/merch";
import React from "react";

export const useToggleSizeMerch = () => {
  const [sizeInput, setSizeInput] = React.useState<string>("");

  const handleAddSize = (
    currentSizes: TSizeMerch[],
    onChange: (s: TSizeMerch[]) => void,
  ) => {
    const trimmed = sizeInput.trim().toUpperCase() as TSizeMerch;

    if (!trimmed) return;

    onChange([...currentSizes, trimmed]);
    setSizeInput("");
  };

  const handleRemoveSize = (
    index: number,
    currentSizes: TSizeMerch[],
    onChange: (s: TSizeMerch[]) => void,
  ) => {
    onChange(currentSizes.filter((_, i) => i !== index));
  };

  return {
    handleAddSize,
    handleRemoveSize,
    sizeInput,
    setSizeInput,
  };
};
