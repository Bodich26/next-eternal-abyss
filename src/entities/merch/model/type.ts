export interface IMerch {
  id: string;
  title: string;
  price: number;
  currency: string;
  shortDescription: string;
  sizes?: TSize[];
  image: string;
}

export type TSize = "S" | "M" | "L" | "XL" | "2XL";

export type MerchCached = {
  isCached?: boolean;
};
