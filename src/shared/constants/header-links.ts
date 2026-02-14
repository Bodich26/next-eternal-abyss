import { PUBLIC_ROUTES } from "@/../routes";

export interface NavItem {
  label: string;
  href: string;
}

export const headerLinkLeft: NavItem[] = [
  { label: "Главная", href: `${PUBLIC_ROUTES.HOME}` },
  {
    label: "Альбомы",
    href: `${PUBLIC_ROUTES.ALBUMS}`,
  },
  { label: "Мерч", href: `${PUBLIC_ROUTES.MERCH}` },
];

export const headerLinkRight: NavItem[] = [
  { label: "Туры", href: `${PUBLIC_ROUTES.TOURS}` },
  { label: "Контакты", href: `${PUBLIC_ROUTES.CONTACT}` },
  { label: "О нас", href: `${PUBLIC_ROUTES.ABOUT}` },
];
