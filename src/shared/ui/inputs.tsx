import clsx from "clsx";
import { InputHTMLAttributes } from "react";

type Props = {
  id: string;
  type: InputHTMLAttributes<HTMLInputElement>["type"];
  placeholder: string;
  className?: string;
} & Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "id" | "type" | "placeholder" | "className"
>;

export const Inputs = ({
  id,
  type,
  placeholder,
  className,
  ...rest
}: Props) => {
  const baseStyles = `bg-transparent border border-whites-100/10 rounded-md px-3 py-2 text-whites-100 focus:border-accent outline-none transition-colors`;

  const finalClassName = clsx(baseStyles, className);

  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className={finalClassName}
      {...rest}
    />
  );
};
