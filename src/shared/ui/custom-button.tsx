import { LucideIcon } from "lucide-react";

type Props = {
  Icon?: LucideIcon;
  text: string;
};
export const CustomButton = ({ Icon, text }: Props) => {
  return (
    <button
      type="button"
      className="px-5 py-3 bg-accent rounded-md  cursor-pointer flex items-center justify-between gap-2.5"
    >
      {text}
      {Icon && <Icon size={20} />}
    </button>
  );
};
