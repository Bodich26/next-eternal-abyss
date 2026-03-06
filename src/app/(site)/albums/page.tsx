import { AlbumItem, getAlbums } from "@/entities/albums";
import { Container, Paragraph } from "@/shared";
import { HeroTitle } from "@/widgets/hero-title";

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
