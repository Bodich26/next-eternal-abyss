"use client";
import { Container, headerLinkLeft, headerLinkRight } from "@/shared";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  return (
    <header className="w-full bg-blacks-100 shadow-block py-1.5 fixed">
      <Container className="flex justify-center items-center">
        <nav className="flex justify-center items-center gap-8">
          <ul className="flex gap-8 items-center">
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
            <Image
              className="mx-22.75"
              src="/logo/logo.png"
              alt="Logo"
              width={58}
              height={56}
            />
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
