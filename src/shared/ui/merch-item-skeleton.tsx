export const MerchItemSkeleton = () => {
  return (
    <div
      className="
          relative 
          w-full 
          aspect-[3/4]
          max-sm:max-w-[370px]
          max-sm:mx-auto
          group
          transition-all
          duration-300
          hover:scale-[1.02]
        "
    >
      <div className="bg-whites-100/20  rounded-md animate-pulse w-[316px] h-[421px]" />
    </div>
  );
};
