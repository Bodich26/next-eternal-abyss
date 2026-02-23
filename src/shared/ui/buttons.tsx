import { ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import clsx from "clsx";

type Variant = "primary" | "danger";

type BaseProps = {
  text: string;
  Icon?: LucideIcon;
  variant?: Variant;
  className?: string;
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
  };

type LinkProps = BaseProps & {
  as: "link";
  href: string;
};

type Props = ButtonProps | LinkProps;

export const Buttons = (props: Props) => {
  const { text, Icon, variant = "primary", className } = props;

  const baseStyles = `
    px-5 py-3
    rounded-md
    cursor-pointer
    flex items-center justify-center
    gap-2.5
    transition-colors
  `;

  const variants: Record<Variant, string> = {
    primary: `
      btn-gradient
      bg-accent
      hover:opacity-90
    `,
    danger: `
      border border-red-500/40
      text-red-400
      hover:bg-red-500/10
    `,
  };

  const finalClassName = clsx(baseStyles, variants[variant], className);

  if (props.as === "link") {
    return (
      <Link href={props.href} className={finalClassName}>
        {text}
        {Icon && <Icon size={20} />}
      </Link>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { as, ...buttonProps } = props;

  return (
    <button {...buttonProps} className={finalClassName}>
      {text}
      {Icon && <Icon size={20} />}
    </button>
  );
};
