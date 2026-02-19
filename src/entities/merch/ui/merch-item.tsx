import Image from "next/image";
import { IMerch } from "../model/type";
import { EditAdminButton } from "@/features/edit-admin-button";
import { PUBLIC_ROUTES } from "../../../../routes";

type Props = {
  merch: IMerch;
  isAdmin?: boolean;
};

export const MerchItem = ({ merch, isAdmin }: Props) => {
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
      {isAdmin && (
        <EditAdminButton
          url={`${PUBLIC_ROUTES.ADMIN}/${PUBLIC_ROUTES.MERCH}`}
          idUrl={merch.id}
        />
      )}
      <div className="relative w-full h-[360px] justify-start items-start overflow-hidden">
        <Image
          src={merch.image}
          alt={merch.title}
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
              <h3 className="text-xl font-bold tracking-wide">{merch.title}</h3>
              <span className="text-accent font-semibold">
                {merch.price} {merch.currency}
              </span>
            </div>
            <p className="text-whites-100/70 text-sm leading-relaxed">
              {merch.shortDescription}
            </p>
          </div>
          <div className="min-h-[48px]">
            {merch.sizes && merch.sizes.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {merch.sizes.map((size) => (
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
