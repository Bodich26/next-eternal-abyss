import { MerchImageItem } from "@/entities/merch";
import { Container, CustomButtonLink, Titles } from "@/shared";
import { ArrowRight } from "lucide-react";

export const OurMerch = () => {
  return (
    <section className="mt-[120px] pt-[33px] pb-[78px] main-gradient-90-deg relative">
      <Container>
        <span className="max-md:hidden absolute w-full left-0 right-0 h-[1px] bg-whites-100/15 rounded-md top-[134px]" />
        <span className="max-md:hidden absolute w-full left-0 right-0 h-[1px] bg-whites-100/15 rounded-md bottom-[182px]" />
        <span className="max-md:hidden absolute w-[1px] top-0 bottom-0 h-full bg-whites-100/15 rounded-md right-[200px]" />
        <span className="max-md:hidden absolute w-[1px] top-0 bottom-0 h-full bg-whites-100/15 rounded-md right-[270px]" />
        <span className="max-md:hidden absolute w-[1px] top-0  bottom-0 h-full bg-whites-100/15 rounded-md left-[200px]" />
        <span className="max-md:hidden absolute w-[1px] top-0  bottom-0 h-full bg-whites-100/15 rounded-md left-[270px]" />
        <div className="mb-[39px] flex justify-center">
          <Titles text={"Наш Мерч"} as={"h3"} />
        </div>
        <div className=" grid grid-cols-4 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:overflow-y-auto max-sm:h-[80vh]">
          {Array.from({ length: 4 }).map((_, index) => (
            <MerchImageItem key={index} image={"/merch/1.jpg"} />
          ))}
        </div>
        <CustomButtonLink
          text={"Посмотреть Все"}
          Icon={ArrowRight}
          link="/merch"
          className="w-[200px] justify-center m-auto mt-[58px] block"
        />
      </Container>
    </section>
  );
};
