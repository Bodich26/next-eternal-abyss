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
        flex flex-col justify-between
      "
    >
      <div className="relative w-full h-[360px] justify-start items-start overflow-hidden">
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

      <div className="p-4 flex flex-col flex-1 gap-4">
        <div className="flex flex-col flex-1 gap-4">
          <div className="flex flex-col flex-1 gap-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold tracking-wide">{item.title}</h3>
              <span className="text-accent font-semibold">
                {item.price} {item.currency}
              </span>
            </div>
            <p className="text-whites-100/70 text-sm leading-relaxed">
              {item.shortDescription}
            </p>
          </div>
          <div className="min-h-[48px]">
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
        </div>
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
