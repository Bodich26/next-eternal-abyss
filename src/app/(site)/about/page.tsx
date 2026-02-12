import { Container, Paragraph, Titles } from "@/shared";
import { HeroTitle } from "@/widgets/hero-title";

export default function About() {
  return (
    <>
      <HeroTitle
        title="Eternal Abyss"
        text="Талантами не рождаются, ими становятся."
      />
      <Container>
        <section className="mt-[100px] max-md:mt-[30px] max-[425]:mt-0!">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="">
              <Titles as="h2" text="Идея и звучание" />
              <Paragraph
                className="mt-4"
                text="Eternal Abyss сочетает агрессивные гитарные риффы, атмосферные
                текстуры и эмоциональную динамику. Мы любим контраст — тишину
                перед взрывом, медленное напряжение перед кульминацией."
              />
              <Paragraph
                className="mt-4"
                text="Наш звук — это сочетание modern metal, cinematic ambience и
                ритмической плотности. Мы не копируем жанр — мы строим
                собственную звуковую архитектуру."
              />
            </div>

            <div className="h-80 rounded-md shadow-block bg-gradient-to-br from-[#1c1c26] to-[#14141c]" />
          </div>
        </section>
      </Container>
      <section className="mt-[100px] max-md:mt-[30px] max-[425]:mt-0! main-gradient-90-deg">
        <Container>
          <Titles as="h3" text="История" />
          <div className="space-y-6 text-zinc-400 leading-relaxed text-lg">
            <p>
              Группа была основана в 2022 году как эксперимент между друзьями,
              которые хотели выйти за рамки обычного звучания.
            </p>
            <p>
              Первые композиции записывались в небольшой комнате, где звук
              отражался от стен, а идеи рождались ночью. Именно тогда появилась
              концепция бездны — как метафоры внутренней силы.
            </p>
            <p>
              С каждым релизом звук становился плотнее, а философия — глубже.
              Eternal Abyss превратилась из проекта в полноценное музыкальное
              движение.
            </p>
            <p>
              Eternal Abyss — это не просто название. Это состояние. Бездна —
              символ внутреннего пространства человека, где сталкиваются страх,
              сила, сомнение и трансформация.
            </p>
            <p>
              Наша музыка — это путешествие в эту глубину. Каждый трек — глава
              одной большой истории о борьбе с самим собой, о поиске смысла и о
              принятии своей тёмной стороны.
            </p>
            <p>
              Мы верим, что свет рождается не из комфорта, а из осознания
              собственной тени.
            </p>
          </div>
        </Container>
      </section>

      {/* КОМАНДА */}
      <section className="mt-[100px] max-md:mt-[30px] max-[425]:mt-0!">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold uppercase tracking-wide text-center mb-16">
            Команда
          </h2>

          <div className="grid md:grid-cols-4 gap-10">
            <div className="space-y-4 text-center">
              <div className="h-56 bg-gradient-to-br from-[#1c1c26] to-[#14141c] rounded-xl" />
              <h3 className="text-xl font-semibold">Bogdan</h3>
              <p className="text-zinc-500 text-sm">Guitar / Composition</p>
              <p className="text-zinc-400 text-sm">
                Создаёт основу звучания. Работает с динамикой и ритмической
                структурой.
              </p>
            </div>

            <div className="space-y-4 text-center">
              <div className="h-56 bg-gradient-to-br from-[#1c1c26] to-[#14141c] rounded-xl" />
              <h3 className="text-xl font-semibold">Alex</h3>
              <p className="text-zinc-500 text-sm">Vocals</p>
              <p className="text-zinc-400 text-sm">
                Передаёт эмоции от шёпота до крика. Голос внутренней борьбы.
              </p>
            </div>

            <div className="space-y-4 text-center">
              <div className="h-56 bg-gradient-to-br from-[#1c1c26] to-[#14141c] rounded-xl" />
              <h3 className="text-xl font-semibold">Dmitry</h3>
              <p className="text-zinc-500 text-sm">Bass</p>
              <p className="text-zinc-400 text-sm">
                Добавляет глубину и плотность звучанию группы.
              </p>
            </div>

            <div className="space-y-4 text-center">
              <div className="h-56 bg-gradient-to-br from-[#1c1c26] to-[#14141c] rounded-xl" />
              <h3 className="text-xl font-semibold">Artem</h3>
              <p className="text-zinc-500 text-sm">Drums</p>
              <p className="text-zinc-400 text-sm">
                Ритмическая энергия и техническая точность.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
