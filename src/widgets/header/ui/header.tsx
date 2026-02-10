"use client";
import { Container, headerLinkLeft, headerLinkRight } from "@/shared";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BurgerButton } from "@/features/burger-button";
import { useMobileMenu } from "../model/use-mobile-menu";

export const Header = () => {
  const { toggleMenu, openMobileMenu } = useMobileMenu();
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full bg-blacks-100 shadow-block z-50 py-1.5 max-md:py-0">
      <Container>
        <div className="hidden justify-between items-center max-md:flex max-md:py-1.5">
          <Image
            className="hidden max-md:block"
            src="/logo/logo.png"
            alt="Logo"
            width={58}
            height={56}
          />
          <BurgerButton toggleMobileMenu={toggleMenu} />
        </div>
        <nav
          className={`
            flex justify-around items-center flex-wrap
            max-md:fixed max-md:top-0 max-md:left-0
            max-md:w-full max-md:flex-col max-md:gap-8
            max-md:bg-blacks-300 max-md:py-6 max-md:h-[30vh]
            max-md:justify-start max-md:overflow-auto max-md:flex-nowrap

            transition-all duration-300 ease-out
            max-md:transform
            ${
              openMobileMenu
                ? "max-md:translate-y-0 max-md:opacity-100"
                : "max-md:-translate-y-full max-md:opacity-0 max-md:pointer-events-none"
            }
          `}
        >
          <ul className="flex gap-8 items-center flex-wrap max-md:flex-col">
            {headerLinkLeft.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <li key={index}>
                  <Link
                    href={item.href}
                    className={`uppercase text-base font-medium hover:text-accent transition-colors ${isActive ? "text-accent" : "text-whites-100"}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Image
            className="block max-md:hidden"
            src="/logo/logo.png"
            alt="Logo"
            width={58}
            height={56}
          />

          <ul className="flex gap-8 items-center flex-wrap max-md:flex-col">
            {headerLinkRight.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <li key={index}>
                  <Link
                    href={item.href}
                    className={`uppercase tracking-widest text-base font-medium hover:text-accent transition-colors ${isActive ? "text-accent" : "text-whites-100"}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </Container>
    </header>
  );
};
