import { TourItem } from "@/entities/tours";
import { Container, Titles } from "@/shared";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const ToursConcerts = () => {
  return (
    <section className="mt-[120px]">
      <Container>
        <div className="flex justify-between items-center mb-[39px] flex-wrap gap-2">
          <Link
            href={"/tour"}
            className="inline-flex items-center gap-2 text-accent border-accent border-b text-[18px]"
          >
            Посмотреть все туры
            <ArrowRight width={24} height={24} />
          </Link>
          <Titles text={"ТУРЫ И КОНЦЕРТЫ"} as={"h3"} />
        </div>
        <div className=" grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:overflow-y-auto max-sm:h-[80vh]">
          {Array.from({ length: 6 }).map((_, index) => (
            <TourItem
              key={index}
              id={String(index)}
              date={"15 Марта"}
              time={"20:00"}
              country={"Берлин, Германия"}
              venue={"Клуб"}
              venueName={"Black Void"}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
