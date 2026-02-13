import Image from "next/image";
import { IMerch } from "../model/type";

type Props = {
  item: IMerch;
};

export const MerchItem = ({ item }: Props) => {
  return (
    <div
      className="
        group relative overflow-hidden
        rounded-md
        main-gradient-90-deg
        shadow-block
        transition-all duration-300
        hover:scale-[1.02]
      "
    >
      {/* Image */}
      <div className="relative w-full h-[360px] overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="
            object-cover object-center
            transition-transform duration-500
            group-hover:scale-110
          "
        />

        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4">
        {/* Title + Price */}
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold tracking-wide">{item.title}</h3>

          <span className="text-accent font-semibold">
            {item.price} {item.currency}
          </span>
        </div>

        {/* Description */}
        <p className="text-whites-100/70 text-sm leading-relaxed">
          {item.shortDescription}
        </p>

        {/* Sizes */}
        <div className="mt-3 min-h-[48px]">
          {item.sizes && item.sizes.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {item.sizes.map((size) => (
                <span
                  key={size}
                  className="
            px-3 py-1 text-xs
            border border-whites-100/20
            rounded-md
            hover:border-accent
            transition-colors
          "
                >
                  {size}
                </span>
              ))}
            </div>
          ) : (
            <span className="text-xs text-whites-100/40">Limited item</span>
          )}
        </div>

        {/* Button */}
        <button
          type="button"
          className="btn-gradient px-5 py-3 bg-accent rounded-md cursor-pointer flex items-center justify-center gap-2.5 w-full"
        >
          Купить
        </button>
      </div>
    </div>
  );
};
