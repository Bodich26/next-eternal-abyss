"use client";
import React from "react";

export const useToggleSizeMerch = () => {
  const [sizeInput, setSizeInput] = React.useState<string>("");

  const handleAddSize = (
    currentSizes: string[],
    onChange: (s: string[]) => void,
  ) => {
    if (!sizeInput.trim()) return;

    onChange([...currentSizes, sizeInput.trim().toUpperCase()]);
    setSizeInput("");
  };

  const handleRemoveSize = (
    index: number,
    currentSizes: string[],
    onChange: (s: string[]) => void,
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
