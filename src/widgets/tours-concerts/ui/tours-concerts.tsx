import { getTours, TourItem } from "@/entities/tours";
import { Container, Titles } from "@/shared";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PUBLIC_ROUTES } from "@/../routes";

export const ToursConcerts = async () => {
  const toursData = await getTours({ isCached: true });
  return (
    <section className="mt-[120px] max-[425]:mt-[80px]!">
      <Container>
        <div className="flex justify-between items-center mb-[39px] flex-wrap gap-2 max-sm:justify-center">
          <Link
            href={PUBLIC_ROUTES.TOURS}
            className="inline-flex items-center gap-2 text-accent border-accent border-b text-[18px] text-link-hover"
          >
            Посмотреть все туры
            <ArrowRight width={24} height={24} />
          </Link>
          <Titles text={"ТУРЫ И КОНЦЕРТЫ"} as={"h3"} />
        </div>
        <div className=" grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:overflow-y-auto max-sm:h-[80vh]">
          {toursData.slice(0, 6).map((tours) => (
            <TourItem key={tours.id} tour={tours} />
          ))}
        </div>
      </Container>
    </section>
  );
};
