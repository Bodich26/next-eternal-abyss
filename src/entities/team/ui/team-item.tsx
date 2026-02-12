import { IMusician } from "../model/type";
import Image from "next/image";

type Props = {
  musician: IMusician;
};

export const TeamItem = ({ musician }: Props) => {
  return (
    <div
      className="space-y-4 text-center group relative
              rounded-md
              main-gradient-90-deg
              shadow-block
              transition-all duration-300
              hover:scale-[1.02]"
    >
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={musician.image}
          alt={musician.name}
          fill
          className="
                  object-cover object-center
                  transition-transform duration-500
                  group-hover:scale-110
                "
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <h4 className="text-xl font-bold">{musician.name}</h4>
      <p className="text-whites-200 text-[16px]">{musician.direction}</p>
      <p className="text-whites-200 text-[16px]">{musician.description}</p>
    </div>
  );
};
