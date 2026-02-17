export interface ITour {
  id: string;
  date: string;
  time: string;
  ticketsUrl: string;
  location: string;
  venue: string;
  venueName: string;
}

export type TourCached = {
  isCached?: boolean;
};
