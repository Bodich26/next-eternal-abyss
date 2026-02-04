"use client";
import React from "react";

export const useMobileMenu = () => {
  const [openMobileMenu, setOpenMobileMenu] = React.useState<boolean>(false);
  const toggleMenu = () => setOpenMobileMenu((prev: boolean) => !prev);

  return { toggleMenu, openMobileMenu };
};
