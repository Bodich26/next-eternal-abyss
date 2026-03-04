import z from "zod";

export const sizeEnumMerch = z.enum(["S", "M", "L", "XL", "2XL"]);
export type TSizeMerch = z.infer<typeof sizeEnumMerch>;

export type IMerch = {
  id: string;
  title: string;
  price: string;
  sizes: TSizeMerch[];
  shortDescription: string;
  image: string;
};

export type MerchCached = {
  isCached?: boolean;
};
