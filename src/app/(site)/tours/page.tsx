import { Metadata } from "next";
import { getTours, TourItem } from "@/entities/tours";
import { Container, Paragraph } from "@/shared";
import { HeroTitle } from "@/widgets/hero-title";
import { API_ROUTES, PUBLIC_ROUTES } from "@/../routes";

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(API_ROUTES.BASE_URL),
    title: "Eternal Abyss - Туры и Концерты",
    description:
      "Предстоящие туры и концерты Eternal Abyss. Узнай где услышать разрушительный deathcore вживую.",
    keywords: [
      "eternal abyss tour",
      "deathcore concerts",
      "metal band tour",
      "deathcore live show",
      "metal concerts",
    ],
    openGraph: {
      title: "Eternal Abyss - Туры и Концерты",
      description:
        "Не пропусти живые выступления Eternal Abyss. Концерты, фестивали и туры.",
      url: `${API_ROUTES.BASE_URL}${PUBLIC_ROUTES.TOURS}`,
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
      title: "Eternal Abyss - Туры и Концерты",
      description:
        "Не пропусти живые выступления Eternal Abyss. Концерты, фестивали и туры.",
      images: "/og-poster-2.jpg",
    },
    other: {
      "vk:image": "/vk-image.jpg",
      "vk:title": "Eternal Abyss - Туры и Концерты",
      "vk:description":
        "Не пропусти живые выступления Eternal Abyss. Концерты, фестивали и туры.",
    },
    robots: "index, follow",
  };
}

export default async function Tours() {
  const toursData = await getTours({ isCached: true });

  return (
    <>
      <HeroTitle
        title="Eternal Abyss"
        text="Приходите на наши концерты, и слушайте нашу музыку вживую!"
      />
      <section className="mt-[100px] max-md:mt-[30px] mb-9">
        <Container>
          {!toursData || toursData.length === 0 ? (
            <Paragraph
              className="text-center"
              text={"Туры пока не запланированы. Следите за обновлениями!"}
            />
          ) : (
            <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1 ">
              {toursData.map((tour) => (
                <TourItem key={tour.id} tour={tour} />
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
