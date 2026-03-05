export type IMerch = {
  id: string;
  title: string;
  price: string;
  sizes: string[];
  shortDescription: string;
  image: string;
};

export type MerchCached = {
  isCached?: boolean;
};
