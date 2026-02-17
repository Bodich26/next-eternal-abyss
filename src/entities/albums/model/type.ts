export interface IAlbum {
  id: string;
  title: string;
  releaseYear: number;
  shortDescription: string;
  tracklist: string[];
  image: string;
}

export type AlbumCached = {
  isCached?: boolean;
};
