import { Buttons, Container, Paragraph } from "@/shared";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { PUBLIC_ROUTES } from "@/../routes";

export const CurrentAlbum = () => {
  return (
    <section>
      <Container className="flex justify-end max-[1060]:justify-center -translate-y-15">
        <div className="shadow-block rounded-md main-gradient-90-deg relative max-w-[1085px] max-xl:max-w-[900px]">
          <span className="max-md:hidden absolute w-full left-0 ring-0 h-[1px] bg-whites-100/15 rounded-md top-[42px]" />
          <span className="max-md:hidden absolute w-[1px] top-0 bottom-0 h-full bg-whites-100/15 rounded-md right-[31px]" />
          <span className="max-md:hidden absolute w-[1px] top-0 bottom-0 h-full bg-whites-100/15 rounded-md right-[101px]" />
          <div className="py-[75px] pl-[212px] pr-[123px] mobile-block-album max-sm:text-center">
            <span className="block mb-4.5 text-xl leading-6">
              Текущий альбом
            </span>
            <h1 className="mb-4 font-unifractur text-[82px] leading-20 max-sm:text-7xl max-sm:leading-18">
              Necrotic Sermons
            </h1>
            <Paragraph
              text="Дебютный альбом Eternal Abyss — это история падения и возрождения,
              борьбы со злом. Через ярость, тьму и хаос музыка ведёт к
              восстановлению справедливости."
              className="mb-14.5"
            />
            <Buttons
              as="link"
              href={PUBLIC_ROUTES.ALBUMS}
              text="Все Альбомы"
              Icon={ArrowRight}
              className="w-[190px] max-sm:m-auto"
            />
          </div>
        </div>
        <div className="absolute left-[15px] top-1/2 -translate-y-1/2 mobile-block-album-img">
          <Image
            src={"/albums/necrotic.jpg"}
            alt={"Album"}
            width={415}
            height={412}
            className="border-2 border-whites-200 rounded-md shadow-block"
          />
        </div>
      </Container>
    </section>
  );
};
