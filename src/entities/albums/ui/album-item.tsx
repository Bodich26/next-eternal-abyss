import Image from "next/image";
import { IAlbum } from "../model/type";
import { EditAdminButton } from "@/features/edit-admin-button";
import { PUBLIC_ROUTES } from "../../../../routes";

type Props = {
  album: IAlbum;
  isAdmin?: boolean;
};

export const AlbumItem = ({ album, isAdmin }: Props) => {
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
      {isAdmin && (
        <EditAdminButton
          url={`${PUBLIC_ROUTES.ADMIN}/${PUBLIC_ROUTES.ALBUMS}`}
          idUrl={album.id}
        />
      )}

      {/* Cover */}
      <div className="relative w-full h-[380px] overflow-hidden">
        <Image
          src={album.image}
          alt={album.title}
          fill
          className="
            object-cover object-center
            transition-transform duration-500
            group-hover:scale-110
          "
        />

        {/* затемнение */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-bold tracking-wide">{album.title}</h3>
            <span className="text-sm text-whites-100/60">
              {album.releaseYear}
            </span>
          </div>
        </div>

        <p className="text-whites-100/70 text-sm leading-relaxed">
          {album.shortDescription}
        </p>

        {/* Tracklist */}
        <ul className="mt-2 flex flex-col gap-1 text-sm text-whites-100/80">
          {album.tracklist.map((track, index) => (
            <li
              key={index}
              className="
                flex justify-between
                border-b border-whites-100/10
                pb-1
                hover:text-accent
                transition-colors
              "
            >
              <span className="opacity-60">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="ml-3 flex-1">{track}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
