"use client";
import { Container, headerLinkLeft, headerLinkRight } from "@/shared";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  return (
    <header className="fixed top-0 left-0 w-full bg-blacks-100 shadow-block z-50 py-1.5">
      <Container>
        <nav className="flex justify-around items-center flex-wrap">
          <ul className="flex gap-8 items-center flex-wrap">
            {headerLinkLeft.map((item, index) => {
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

          <Image
            className=""
            src="/logo/logo.png"
            alt="Logo"
            width={58}
            height={56}
          />

          <ul className="flex gap-8 items-center flex-wrap">
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
