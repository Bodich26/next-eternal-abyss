import { PUBLIC_ROUTES } from "@/../routes";

export interface IOtherLinks {
  label: string;
  href: string;
}

export const otherLinks: IOtherLinks[] = [
  { label: "Instagram", href: `${PUBLIC_ROUTES.ALBUMS}` },
  { label: "YouTube", href: `${PUBLIC_ROUTES.ALBUMS}` },
  { label: "Spotify", href: `${PUBLIC_ROUTES.ALBUMS}` },
  { label: "TikTok", href: `${PUBLIC_ROUTES.ALBUMS}` },
];
