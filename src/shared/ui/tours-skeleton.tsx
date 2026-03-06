import { Container, Links, Titles } from "@/shared";
import { ArrowRight } from "lucide-react";
import { PUBLIC_ROUTES } from "@/../routes";
import { TourItemSkeleton } from "./tour-item-skeleton";

export const ToursSkeleton = () => {
  return (
    <section className="mt-[120px] max-[425]:mt-[80px]!">
      <Container>
        <div className="flex justify-between items-center mb-[39px] flex-wrap gap-2 max-sm:justify-center">
          <Links
            text={"Посмотреть все туры"}
            href={PUBLIC_ROUTES.TOURS}
            Icon={ArrowRight}
            size={"18px"}
            sizeIcon={24}
          />
          <Titles text={"ТУРЫ И КОНЦЕРТЫ"} as={"h3"} />
        </div>

        <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:overflow-y-auto max-sm:h-[80vh]">
          {Array.from({ length: 6 }).map((_, index) => (
            <TourItemSkeleton key={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};
