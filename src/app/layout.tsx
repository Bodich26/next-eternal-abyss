import type { Metadata } from "next";
import { Geist } from "next/font/google";
import localFont from "next/font/local";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import "./globals.css";
import { API_ROUTES } from "@/../routes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

export const unifraktur = localFont({
  src: [
    {
      path: "./fonts/UnifrakturMaguntia-Book.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-unifractur",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(API_ROUTES.BASE_URL),
  title: "Eternal Abyss - Official Deathcore Band Site",
  description:
    "Погрузись в хаос Eternal Abyss: deathcore-музыка, туры, мерч и многое другое. Испытай брутальные брейкдауны и вечные бездны из глубин Восточной Европы.",
  keywords: [
    "deathcore",
    "metal band",
    "eternal abyss",
    "heavy metal",
    "metal tours",
    "eternal abyss merch",
    "metal albums",
    "brutal metal",
    "growling",
  ],
  authors: [
    {
      name: "Команда Eternal Abyss",
      url: new URL(API_ROUTES.BASE_URL),
    },
  ],
  creator: "Eternal Abyss",
  openGraph: {
    title: "Eternal Abyss - Deathcore Band",
    description:
      "Открой музыку из самой тьмы — туры, концерты и эксклюзивный мерч ждут тебя.",
    url: new URL(API_ROUTES.BASE_URL),
    siteName: "Eternal Abyss",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Логотип группы Eternal Abyss",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eternal Abyss - Deathcore Band",
    description:
      "Открой музыку из самой тьмы — туры, концерты и эксклюзивный мерч ждут тебя.",
    images: ["/twitter-image.jpg"],
  },
  other: {
    "vk:image": "/vk-image.jpg",
    "vk:title": "Eternal Abyss - Deathcore Band",
    "vk:description":
      "Открой музыку из самой тьмы — туры, концерты и эксклюзивный мерч ждут тебя.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/icon.png",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${unifraktur.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="pt-[68px] flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
