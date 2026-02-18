import { CustomButtonLink } from "@/shared";
import Link from "next/link";

type Props = {
  url: string;
  idUrl: string;
};

export const EditAdminButton = ({ url, idUrl }: Props) => {
  return (
    <div
      className="
      absolute inset-0
      flex items-center justify-center
      bg-whites-200/30
      opacity-0
      transition-opacity duration-300
      group-hover:opacity-100
      z-10
    "
    >
      <CustomButtonLink text={"Изменить"} link={`${url}${idUrl}`} />
    </div>
  );
};
