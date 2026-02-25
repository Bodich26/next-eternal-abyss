import { AlbumItem, getAlbums } from "@/entities/albums";
import { Container } from "@/shared";
import { HeroTitle } from "@/widgets/hero-title";

export default async function Albums() {
  const albumsData = await getAlbums({ isCached: false });

  return (
    <>
      <HeroTitle
        title="Eternal Abyss"
        text="Админка для управления Альбомами."
      />
      <section className="mt-[100px] max-md:mt-[30px] mb-9">
        <Container>
          {!albumsData ||
            (albumsData.length === 0 && (
              <p className="text-whites-200 text-lg text-center">
                Альбомы не найдено!
              </p>
            ))}
          <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {albumsData
              .sort((a, b) => b.releaseYear - a.releaseYear)
              .map((album) => (
                <AlbumItem key={album.id} album={album} isAdmin={true} />
              ))}
          </div>
        </Container>
      </section>
    </>
  );
}
