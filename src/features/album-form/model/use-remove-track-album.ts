"use client";
export const useRemoveTrackAlbum = () => {
  const handleRemoveTrack = (
    index: number,
    currentTracks: string[],
    onChange: (v: string[]) => void,
  ) => {
    onChange(currentTracks.filter((_, i) => i !== index));
  };

  return {
    handleRemoveTrack,
  };
};
