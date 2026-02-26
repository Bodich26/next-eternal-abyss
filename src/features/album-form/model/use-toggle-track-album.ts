"use client";
import React from "react";

export const useToggleTrackAlbum = () => {
  const [trackInput, setTrackInput] = React.useState<string>("");

  const handleAddTrack = (
    currentTrack: string[],
    onChange: (v: string[]) => void,
  ) => {
    if (!trackInput.trim()) return;

    onChange([...currentTrack, trackInput.trim()]);
    setTrackInput("");
  };

  const handleRemoveTrack = (
    index: number,
    currentTracks: string[],
    onChange: (v: string[]) => void,
  ) => {
    onChange(currentTracks.filter((_, i) => i !== index));
  };

  return {
    handleAddTrack,
    handleRemoveTrack,
    trackInput,
    setTrackInput,
  };
};
