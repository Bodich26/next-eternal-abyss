import { getTours, TourItem } from "@/entities/tours";
import { Container } from "@/shared";
import { HeroTitle } from "@/widgets/hero-title";

export default async function Tours() {
  const toursData = await getTours({ isCached: false });

  return (
    <>
      <HeroTitle title="Eternal Abyss" text="Админка для управления Турами." />
      <section className="mt-[100px] max-md:mt-[30px] mb-9">
        <Container>
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
