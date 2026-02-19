import { CustomButtonLink } from "@/shared";

type Props = {
  url: string;
  idUrl: string;
};

export const EditAdminButton = ({ url, idUrl }: Props) => {
  const URL_REDIRECT = `${url}/${idUrl}`;
  return (
    <div
      className="
      absolute inset-0
      flex items-center justify-center
      bg-whites-200/30
      opacity-0
      transition-opacity duration-300
      group-hover:opacity-100 rounded-md
      z-10
    "
    >
      <CustomButtonLink text={"Изменить"} link={URL_REDIRECT} />
    </div>
  );
};
