import type { Metadata } from "next";
import { Container, Paragraph, Titles } from "@/shared";
import { HeroTitle } from "@/widgets/hero-title";
import team from "@/entities/team/model/team.json";
import { TeamItem } from "@/entities/team";
import Image from "next/image";
import { API_ROUTES, PUBLIC_ROUTES } from "@/../routes";

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(API_ROUTES.BASE_URL),
    title: "Eternal Abyss - О нас: История, Команда",
    description:
      "Узнайте историю deathcore-группы Eternal Abyss: от идеи до брутального звучания, команда музыкантов. Присоединяйтесь к нам!",
    keywords: [
      "deathcore",
      "metal band",
      "eternal abyss",
      "heavy metal",
      "metal tours",
      "eternal abyss merch",
      "metal albums",
      "brutal metal",
      "growling",
    ],
    openGraph: {
      title: "Eternal Abyss - О нас",
      description: "Узнай больше о Eternal Abyss: История, Музыка, Команда.",
      url: `${API_ROUTES.BASE_URL}${PUBLIC_ROUTES.ABOUT}`,
      images: [
        {
          url: "/og-poster-2.jpg",
          width: 1200,
          height: 630,
          alt: "Постер Eternal Abyss",
        },
      ],
      locale: "ru_RU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Eternal Abyss - О нас",
      description:
        "История, команда и звучание deathcore-группы Eternal Abyss.",
      images: "/og-poster-2.jpg",
    },
    robots: "index, follow",
  };
}

export default function About() {
  return (
    <>
      <HeroTitle
        title="Eternal Abyss"
        text="Талантами не рождаются, ими становятся."
      />
      <section className="mt-[100px] max-md:mt-[30px] max-md:text-center">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-center max-md:gap-8">
            <div className="relative w-full h-80 overflow-hidden rounded-md shadow-block transition-all duration-300 hover:scale-[1.02]">
              <Image
                src={"/poster-2.jpg"}
                alt={"ideaAndSound"}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-110 rounded-md"
              />
              <div className="absolute inset-0 bg-black/30 rounded-md" />
            </div>
            <div className="space-y-4">
              <Titles as="h2" text="Идея и звучание" />
              <Paragraph
                text="Eternal Abyss сочетает агрессивные гитарные риффы, атмосферные
                текстуры и эмоциональную динамику. Мы любим контраст — тишину
                перед взрывом, медленное напряжение перед кульминацией."
              />
              <Paragraph
                text="Наш звук — это сочетание modern metal, cinematic ambience и
                ритмической плотности. Мы не копируем жанр — мы строим
                собственную звуковую архитектуру."
              />
            </div>
          </div>
        </Container>
      </section>
      <section className="mt-[100px] max-md:mt-[64px] main-gradient-90-deg max-md:text-center">
        <Container>
          <Titles as="h3" text="История" />
          <div className="py-4 flex gap-8 max-md:flex-col max-md:pt-4">
            <div className="gap-4 flex flex-col">
              <Paragraph
                text="Группа была основана в 2022 году как эксперимент между друзьями,
              которые хотели выйти за рамки обычного звучания."
              />
              <Paragraph
                text="Первые композиции записывались в небольшой комнате, где звук
              отражался от стен, а идеи рождались ночью. Именно тогда появилась
              концепция бездны — как метафоры внутренней силы."
              />
              <Paragraph
                text="С каждым релизом звук становился плотнее, а философия — глубже.
              Eternal Abyss превратилась из проекта в полноценное музыкальное
              движение."
              />
            </div>
            <div className="gap-4 flex flex-col">
              <Paragraph
                text="Eternal Abyss — это не просто название. Это состояние. Бездна —
              символ внутреннего пространства человека, где сталкиваются страх,
              сила, сомнение и трансформация."
              />
              <Paragraph
                text="Наша музыка — это путешествие в эту глубину. Каждый трек — глава
              одной большой истории о борьбе с самим собой, о поиске смысла и о
              принятии своей тёмной стороны."
              />
              <Paragraph
                text="Мы верим, что свет рождается не из комфорта, а из осознания
              собственной тени."
              />
            </div>
          </div>
        </Container>
      </section>
      <section className="mt-[100px] max-md:mt-[30px] mb-9">
        <Container>
          <Titles as="h3" text="Команда" className="text-center mb-4" />
          <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {team.map((musician) => (
              <TeamItem key={musician.id} musician={musician} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
