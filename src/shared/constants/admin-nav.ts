import { PUBLIC_ROUTES } from "@/../routes";

export interface IAdminNav {
  title: string;
  description: string;
  href: string;
}

export const adminNav: IAdminNav[] = [
  {
    title: "Альбомы",
    description: "Управление релизами и треклистами",
    href: `${PUBLIC_ROUTES.ADMIN}/${PUBLIC_ROUTES.ALBUMS}`,
  },
  {
    title: "Туры",
    description: "Добавление и редактирование дат концертов",
    href: `${PUBLIC_ROUTES.ADMIN}/${PUBLIC_ROUTES.TOURS}`,
  },
  {
    title: "Мерч",
    description: "Каталог товаров и цены",
    href: `${PUBLIC_ROUTES.ADMIN}/${PUBLIC_ROUTES.MERCH}`,
  },
];
