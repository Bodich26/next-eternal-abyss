import { getTours, TourItem } from "@/entities/tours";
import { Container, Links } from "@/shared";
import { HeroTitle } from "@/widgets/hero-title";
import { PUBLIC_ROUTES } from "@/../routes";
import { ArrowLeft } from "lucide-react";

export default async function Tours() {
  const toursData = await getTours({ isCached: false });
  return (
    <>
      <HeroTitle title="Eternal Abyss" text={"Админка для управления Турами."}>
        <Links
          text={"Вернуться к админ списку"}
          href={`${PUBLIC_ROUTES.ADMIN}`}
          size={"16px"}
          Icon={ArrowLeft}
          className="inline-flex flex-row-reverse items-center"
        />
      </HeroTitle>
      <section className="mt-[100px] max-md:mt-[30px] mb-9">
        <Container>
          {!toursData ||
            (toursData.length === 0 && (
              <p className="text-whites-200 text-lg text-center">
                Туры не найдены!
              </p>
            ))}
          <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1 ">
            {toursData.map((tour) => (
              <TourItem key={tour.id} tour={tour} isAdmin={true} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
