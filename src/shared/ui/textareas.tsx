import clsx from "clsx";
import { TextareaHTMLAttributes } from "react";

type Props = {
  id: string;
  placeholder: string;
  label?: string;
  className?: string;
} & Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "id" | "placeholder" | "className"
>;

export const Textareas = ({
  id,
  placeholder,
  label,
  className,
  ...rest
}: Props) => {
  const baseStyles = `bg-transparent border border-whites-100/10 rounded-md px-3 py-2 text-whites-100 focus:border-accent outline-none transition-colors`;

  const finalClassName = clsx(baseStyles, className);

  return (
    <>
      {label && (
        <label htmlFor={id} className="text-sm text-whites-100/60">
          {label}
        </label>
      )}
      <textarea
        id={id}
        required
        placeholder={placeholder}
        className={finalClassName}
        {...rest}
      />
    </>
  );
};
