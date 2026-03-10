import { Metadata } from "next";
import { AlbumItem, getAlbums } from "@/entities/albums";
import { Container, Paragraph } from "@/shared";
import { HeroTitle } from "@/widgets/hero-title";
import { API_ROUTES, PUBLIC_ROUTES } from "@/../routes";

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(API_ROUTES.BASE_URL),
    title: "Eternal Abyss - Альбомы",
    description:
      "Все альбомы Eternal Abyss — брутальные deathcore альбомы и не только.",
    keywords: [
      "eternal abyss albums",
      "deathcore albums",
      "deathcore discography",
      "eternal abyss music",
      "heavy breakdowns",
      "extreme metal albums",
      "deathcore releases",
    ],
    openGraph: {
      title: "Eternal Abyss - Альбомы",
      description:
        "Все альбомы Eternal Abyss — брутальные deathcore альбомы и не только.",
      url: `${API_ROUTES.BASE_URL}${PUBLIC_ROUTES.ALBUMS}`,
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
      title: "Eternal Abyss - Альбомы",
      description:
        "Все альбомы Eternal Abyss — брутальные deathcore альбомы и не только.",
      images: "/og-poster-2.jpg",
    },
    other: {
      "vk:image": "/vk-image.jpg",
      "vk:title": "Eternal Abyss - Альбомы",
      "vk:description":
        "Все альбомы Eternal Abyss — брутальные deathcore альбомы и не только.",
    },
    robots: "index, follow",
  };
}

export default async function Albums() {
  const albumsData = await getAlbums({ isCached: true });

  return (
    <>
      <HeroTitle title="Eternal Abyss" text="Мы превращаем эмоции в звук." />
      <section className="mt-[100px] max-md:mt-[30px] mb-9">
        <Container>
          {!albumsData || albumsData.length === 0 ? (
            <Paragraph
              className="text-center"
              text={"Альбомов нет, возможно произошла ошибка!"}
            />
          ) : (
            <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
              {albumsData
                .sort((a, b) => Number(b.releaseYear) - Number(a.releaseYear))
                .map((album) => (
                  <AlbumItem key={album.id} album={album} />
                ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
