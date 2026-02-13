import { AlbumItem, getAlbums } from "@/entities/albums";
import { Container } from "@/shared";
import { HeroTitle } from "@/widgets/hero-title";

export default async function Album() {
  const albumsData = await getAlbums();

  return (
    <>
      <HeroTitle title="Eternal Abyss" text="Мы превращаем эмоции в звук." />
      <section className="mt-[100px] max-md:mt-[30px] mb-9">
        <Container>
          <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {albumsData
              .sort((a, b) => b.releaseYear - a.releaseYear)
              .map((album) => (
                <AlbumItem key={album.id} album={album} />
              ))}
          </div>
        </Container>
      </section>
    </>
  );
}
