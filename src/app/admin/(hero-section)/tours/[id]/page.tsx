import { getTourId } from "@/entities/tours";
import { TourForm } from "@/features/tour-form";
import { Container, Links } from "@/shared";
import { HeroTitle } from "@/widgets/hero-title";
import { PUBLIC_ROUTES } from "@/../routes";
import { ArrowLeft } from "lucide-react";

type Props = {
  params: { id: string };
};
export default async function TourId({ params }: Props) {
  const id = (await params).id;
  const currentTour = await getTourId(id);

  return (
    <>
      <HeroTitle title="Eternal Abyss" text={`Редактирование тура Id: ${id}`}>
        <Links
          text={"Вернуться к турам"}
          href={`${PUBLIC_ROUTES.ADMIN}/${PUBLIC_ROUTES.TOURS}`}
          size={"16px"}
          Icon={ArrowLeft}
          className="inline-flex flex-row-reverse items-center"
        />
      </HeroTitle>
      <section className="mt-[100px] max-md:mt-[30px] mb-16">
        <Container>
          {currentTour ? (
            <TourForm initialData={currentTour} />
          ) : (
            <p className="text-whites-200 text-lg text-center">
              Произошла ошибка при получении тура
            </p>
          )}
        </Container>
      </section>
    </>
  );
}
