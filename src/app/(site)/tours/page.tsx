import { getTours, TourItem } from "@/entities/tours";
import { Container, Paragraph } from "@/shared";
import { HeroTitle } from "@/widgets/hero-title";

export default async function Tours() {
  const toursData = await getTours({ isCached: true });

  return (
    <>
      <HeroTitle
        title="Eternal Abyss"
        text="Приходите на наши концерты, и слушайте нашу музыку вживую!"
      />
      <section className="mt-[100px] max-md:mt-[30px] mb-9">
        <Container>
          {!toursData || toursData.length === 0 ? (
            <Paragraph
              className="text-center"
              text={"Туры пока не запланированы. Следите за обновлениями!"}
            />
          ) : (
            <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1 ">
              {toursData.map((tour) => (
                <TourItem key={tour.id} tour={tour} />
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
