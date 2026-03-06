import { Image } from "lucide-react";

export const MerchItemSkeleton = () => {
  return (
    <div
      className="
        relative 
        w-full 
        aspect-[3/4]
        max-sm:max-w-[370px]
        max-sm:mx-auto
      "
    >
      <div className="bg-whites-100/20 relative rounded-md animate-pulse w-[316px] h-[421px] flex items-center justify-center">
        <Image size={38} />
      </div>
    </div>
  );
};
