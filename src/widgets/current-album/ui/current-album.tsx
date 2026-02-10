import { Container, CustomButtonLink } from "@/shared";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const CurrentAlbum = () => {
  return (
    <section>
      <Container className="flex justify-end -translate-y-15">
        <div className=" shadow-block rounded-md main-gradient-90-deg relative max-w-[1085px] max-xl:max-w-[900px]">
          <span className="absolute w-full left-0 ring-0 h-[1px] bg-whites-100/15 rounded-md top-[42px]" />
          <span className="absolute w-[1px] top-0 bottom-0 h-full bg-whites-100/15 rounded-md right-[31px]" />
          <span className="absolute w-[1px] top-0 bottom-0 h-full bg-whites-100/15 rounded-md right-[101px]" />
          <div className="py-[75px] pl-[212px] pr-[123px] mobile-block-album">
            <span className="block mb-4.5 text-xl leading-6">
              Текущий альбом
            </span>
            <h3 className="mb-4 font-unifractur text-[82px] leading-20">
              Necrotic Sermons
            </h3>
            <p className="mb-14.5 text-[18px] tracking-wide">
              Дебютный альбом Eternal Abyss — это история падения и возрождения,
              борьбы со злом. Через ярость, тьму и хаос музыка ведёт к
              восстановлению справедливости.
            </p>
            <CustomButtonLink
              text={"Все Альбомы"}
              Icon={ArrowRight}
              link="/album"
              className="w-[190px] justify-center"
            />
          </div>
        </div>
        <div className="absolute left-[15px] top-1/2 -translate-y-1/2">
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
