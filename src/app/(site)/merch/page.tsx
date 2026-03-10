import { Metadata } from "next";
import { getMerch, MerchItem } from "@/entities/merch";
import { Container, Paragraph } from "@/shared";
import { HeroTitle } from "@/widgets/hero-title";
import { API_ROUTES, PUBLIC_ROUTES } from "@/../routes";

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(API_ROUTES.BASE_URL),
    title: "Eternal Abyss - Мерч",
    description:
      "Официальный мерч Eternal Abyss — футболки, худи и эксклюзивная одежда для фанатов deathcore и Metal",
    keywords: [
      "eternal abyss merch",
      "deathcore merch",
      "metal band merch",
      "deathcore t shirts",
      "metal hoodies",
      "official band merchandise",
    ],
    openGraph: {
      title: "Eternal Abyss - Мерч.",
      description: "Стильный мерч Eternal Abyss — Футболки, Худи, Кроссовки.",
      url: `${API_ROUTES.BASE_URL}${PUBLIC_ROUTES.MERCH}`,
      images: [
        {
          url: "/og-poster-2.jpg",
          width: 1200,
          height: 630,
          alt: "Постер Eternal Abyss",
        },
      ],
      locale: "ru_RU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Eternal Abyss - Мерч.",
      description: "Стильный мерч Eternal Abyss — Футболки, Худи, Кроссовки.",
      images: "/og-poster-2.jpg",
    },
    other: {
      "vk:image": "/vk-image.jpg",
      "vk:title": "Eternal Abyss - Мерч.",
      "vk:description":
        "Стильный мерч Eternal Abyss — Футболки, Худи, Кроссовки.",
    },
    robots: "index, follow",
  };
}

export default async function Merch() {
  const merchData = await getMerch({ isCached: true });
  return (
    <>
      <HeroTitle
        title="Eternal Abyss"
        text="Комфорт и характер в каждой детали."
      />
      <section className="mt-[100px] max-md:mt-[30px] mb-9">
        <Container>
          {!merchData || merchData.length === 0 ? (
            <Paragraph
              className="text-center"
              text={"Мерча пока что нет. Следите за обновлениями!"}
            />
          ) : (
            <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1 ">
              {merchData.map((merch) => (
                <MerchItem key={merch.id} merch={merch} />
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
