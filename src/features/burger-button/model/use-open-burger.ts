"use client";
import React from "react";

type Props = {
  toggleMobileMenu: () => void;
};
export const useOpenBurger = ({ toggleMobileMenu }: Props) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleClick = () => {
    toggleMobileMenu();
    setOpen(!open);
  };

  return { handleClick, open };
};
