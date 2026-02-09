import Image from "next/image";

type Props = {
  image: string;
};
export const MerchImageItem = ({ image }: Props) => {
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
      <Image
        src={image}
        fill
        alt="Merch"
        className="object-cover border-2 border-whites-200 rounded-md shadow-block"
      />
    </div>
  );
};
