export interface NavItem {
  label: string;
  href: string;
}

export const headerLinkLeft: NavItem[] = [
  { label: "Главная", href: "/" },
  { label: "Альбомы", href: "/album" },
  { label: "Мерч", href: "/merch" },
];
export const headerLinkRight: NavItem[] = [
  { label: "Туры", href: "/tour" },
  { label: "Контакты", href: "/contact" },
  { label: "О нас", href: "/about" },
];
