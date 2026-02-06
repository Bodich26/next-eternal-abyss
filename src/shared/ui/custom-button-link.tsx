import { LucideIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  Icon?: LucideIcon;
  text: string;
  link: string;
  className?: string;
};
export const CustomButtonLink = ({ Icon, text, link, className }: Props) => {
  return (
    <Link
      href={link}
      className={`px-5 py-3 bg-accent rounded-md cursor-pointer flex items-center justify-between gap-2.5 ${className}`}
    >
      {text}
      {Icon && <Icon size={20} />}
    </Link>
  );
};
