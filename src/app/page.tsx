import { TourItem } from "@/entities/tours";
import { Container, CustomButtonLink, Titles } from "@/shared";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-main flex items-center">
        <Container className="flex items-center justify-center">
          <Image
            src={"/logo/text-logo.png"}
            alt={"MainTextLogo"}
            width={1151}
            height={521}
          />
        </Container>
      </section>
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
                Дебютный альбом Eternal Abyss — это история падения и
                возрождения, борьбы со злом. Через ярость, тьму и хаос музыка
                ведёт к восстановлению справедливости.
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
      <section className="mt-[100px]">
        <div className="bg-group">
          <div className="bg-group__image" />
          <div className="bg-gradient-90-deg absolute inset-0 z-[1]" />
          <Container className="mobile-block-about py-[80px] relative z-[2] flex justify-between items-center gap-[101px] max-lg:flex-col-reverse  max-lg:items-center ">
            <div className="flex-1 min-w-0 max-lg:text-center">
              <Titles text="Музыка и идея группы" as="h2" />
              <p className="mt-4 tracking-wide text-[18px]">
                Eternal Abyss — deathcore-группа, для которой музыка является
                способом говорить о важных вещах. В основе нашего звучания —
                тяжёлые риффы, агрессивная энергия и мрачная атмосфера,
                сочетающиеся с идеей борьбы со злом и стремлением к
                справедливости. Мы создаём треки как отражение внутренней силы,
                преодоления хаоса и движения вперёд. Каждая композиция — это
                история о сопротивлении, выборе и возрождении, переданная через
                звук и эмоции.
              </p>
              <CustomButtonLink
                text="Узнать Больше"
                link="/about"
                className="w-[190px] mt-[58px] justify-center max-lg:mr-auto max-lg:ml-auto"
              />
            </div>
            <div className="shrink-0 relative w-[595px] h-[554px] max-md:w-full max-sm:h-[700px]">
              <Image
                src={"/poster-2.jpg"}
                alt={"People1"}
                width={324}
                height={301}
                className="z-1 object-cover object-center w-[324px] h-[301px] absolute border-2 border-whites-200 rounded-md shadow-block bottom-0 left-0 max-sm:w-full"
              />
              <Image
                src={"/poster-1.jpg"}
                alt={"People2"}
                width={393}
                height={474}
                className="object-cover object-center w-[393px] h-[474px] absolute border-2 border-whites-200 rounded-md shadow-block right-0 top-0 max-sm:w-full"
              />
            </div>
          </Container>
        </div>
      </section>
      <section className="mt-[120px]">
        <Container className="">
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
          <div className=" grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
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
    </>
  );
}
