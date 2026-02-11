import { AlbumItem, getAlbums } from "@/entities/albums";
import { Container, Titles } from "@/shared";

export default async function Album() {
  const albumsData = await getAlbums();

  return (
    <section className="py-12">
      <Container>
        <Titles as="h1" text="Альбомы нашей группы" className="mb-[39px]" />
        <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:overflow-y-auto max-sm:h-[80vh]">
          {albumsData
            .sort((a, b) => b.releaseYear - a.releaseYear)
            .map((album) => (
              <AlbumItem key={album.id} album={album} />
            ))}
        </div>
      </Container>
    </section>
  );
}
