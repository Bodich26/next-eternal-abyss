import { HTMLInputTypeAttribute } from "react";

type Props = {
  id: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  label: string;
};

export const Inputs = ({ id, type, placeholder, label }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm text-whites-100/60">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        className="
                    bg-transparent
                    border border-whites-100/10
                    rounded-md
                    px-3 py-2
                    text-whites-100
                    focus:border-accent
                    outline-none
                    transition-colors
                  "
      />
    </div>
  );
};
