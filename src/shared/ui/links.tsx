import clsx from "clsx";
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
  className?: string;
};
export const Links = ({
  href,
  text,
  size,
  Icon,
  sizeIcon,
  className,
}: Props) => {
  return (
    <Link
      href={href}
      className={clsx(
        `inline-flex items-center gap-2 text-accent border-accent border-b text-link-hover text-[${size}]`,
        className,
      )}
    >
      {text}
      {Icon && <Icon size={sizeIcon} />}
    </Link>
  );
};
