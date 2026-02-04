"use client";
import { useOpenBurger } from "../model/use-open-burger";

type Props = {
  toggleMobileMenu: () => void;
};

export const BurgerButton = (toggleMobileMenu: Props) => {
  const { open, handleClick } = useOpenBurger(toggleMobileMenu);

  return (
    <button
      onClick={handleClick}
      aria-label="Open menu"
      className="relative w-8 h-8 flex items-center justify-center md:hidden z-10"
    >
      <span
        className={`
          absolute h-0.5 w-6 bg-white transition-all
          ${open ? "rotate-45" : "-translate-y-2"}
        `}
      />
      <span
        className={`
          absolute h-0.5 w-6 bg-white transition-all
          ${open ? "opacity-0" : ""}
        `}
      />
      <span
        className={`
          absolute h-0.5 w-6 bg-white transition-all
          ${open ? "-rotate-45" : "translate-y-2"}
        `}
      />
    </button>
  );
};
