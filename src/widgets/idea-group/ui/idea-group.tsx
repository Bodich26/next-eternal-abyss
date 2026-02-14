import { Container, CustomButtonLink, Paragraph, Titles } from "@/shared";
import Image from "next/image";
import { PUBLIC_ROUTES } from "@/../routes";

export const IdeaGroup = () => {
  return (
    <section className="mt-[100px] max-md:mt-[30px] max-[425]:mt-0!">
      <div className="bg-group">
        <div className="bg-group__image" />
        <div className="bg-gradient-90-deg absolute inset-0 z-[1]" />
        <Container className="mobile-block-about py-[80px] max-sm:py-[25px] relative z-[2] flex justify-between items-center gap-[101px] max-lg:flex-col-reverse  max-lg:items-center ">
          <div className="flex-1 min-w-0 max-lg:text-center">
            <Titles text="Музыка и идея группы" as="h2" />
            <Paragraph
              className="mt-4"
              text="Eternal Abyss — deathcore-группа, для которой музыка является
              способом говорить о важных вещах. В основе нашего звучания —
              тяжёлые риффы, агрессивная энергия и мрачная атмосфера,
              сочетающиеся с идеей борьбы со злом и стремлением к
              справедливости. Мы создаём треки как отражение внутренней силы,
              преодоления хаоса и движения вперёд. Каждая композиция — это
              история о сопротивлении, выборе и возрождении, переданная через
              звук и эмоции."
            />
            <CustomButtonLink
              text="Узнать Больше"
              link={PUBLIC_ROUTES.ABOUT}
              className="w-[190px] mt-[58px] justify-center max-lg:mr-auto max-lg:ml-auto"
            />
          </div>
          <div className="shrink-0 relative w-[595px] h-[554px] max-md:w-full max-sm:h-[auto] max-sm:flex-col max-sm:flex max-sm:w-full max-sm:gap-4">
            <Image
              src={"/poster-2.jpg"}
              alt={"People1"}
              width={324}
              height={301}
              className="z-1 object-cover object-center w-[324px] h-[301px] absolute border-2 border-whites-200 rounded-md shadow-block bottom-0 left-0 max-sm:w-full max-sm:relative max-sm:h-[300px]"
            />
            <Image
              src={"/poster-1.jpg"}
              alt={"People2"}
              width={393}
              height={474}
              className="object-cover object-center w-[393px] h-[474px] absolute border-2 border-whites-200 rounded-md shadow-block right-0 top-0 max-sm:w-full max-sm:relative max-sm:h-[300px]"
            />
          </div>
        </Container>
      </div>
    </section>
  );
};
