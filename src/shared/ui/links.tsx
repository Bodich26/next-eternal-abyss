import { LucideIcon } from "lucide-react";
import Link from "next/link";

type Size = "16px" | "18px";
type SizeIcon = 20 | 24;

type Props = {
  text: string;
  href: string;
  size: Size;
  Icon?: LucideIcon;
  sizeIcon?: SizeIcon;
};
export const Links = ({ href, text, size, Icon, sizeIcon }: Props) => {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 text-accent border-accent border-b text-link-hover text-[${size}]`}
    >
      {text}
      {Icon && <Icon size={sizeIcon} />}
    </Link>
  );
};
