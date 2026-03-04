import { getAlbumId } from "@/entities/albums";
import { AlbumForm } from "@/features/album-form";
import { Container, Links } from "@/shared";
import { HeroTitle } from "@/widgets/hero-title";
import { PUBLIC_ROUTES } from "@/../routes";
import { ArrowLeft } from "lucide-react";

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
      >
        <Links
          text={"Вернуться к альбомам"}
          href={`${PUBLIC_ROUTES.ADMIN}/${PUBLIC_ROUTES.ALBUMS}`}
          size={"16px"}
          Icon={ArrowLeft}
          className="inline-flex flex-row-reverse items-center"
        />
      </HeroTitle>

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
