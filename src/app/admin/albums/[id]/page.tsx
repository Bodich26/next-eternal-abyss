import { getAlbumId } from "@/entities/albums";
import { AlbumForm } from "@/features/album-form";
import { Container } from "@/shared";
import { HeroTitle } from "@/widgets/hero-title";

type Props = {
  params: { id: string };
};
export default async function AlbumId({ params }: Props) {
  const id = (await params).id;
  const currenAlbum = await getAlbumId(id);

  return (
    <>
      <HeroTitle
        title="Eternal Abyss"
        text={`Редактирование альбома Id: ${id}`}
      />

      <section className="mt-[100px] max-md:mt-[30px] mb-16">
        <Container>
          {currenAlbum ? (
            <AlbumForm initialData={currenAlbum} />
          ) : (
            <p className="text-whites-200 text-lg text-center">
              Произошла ошибка при получении альбома
            </p>
          )}
        </Container>
      </section>
    </>
  );
}
