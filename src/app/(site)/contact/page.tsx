import { Container, eventsItem, otherLinks, Paragraph, Titles } from "@/shared";
import { HeroTitle } from "@/widgets/hero-title";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <HeroTitle title="Eternal Abyss" text="Пишите, звоните, мы на связи." />
      <section className="mt-[100px] max-md:mt-[30px] max-md:text-center">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            {eventsItem.map((item, index) => (
              <div
                key={index}
                className="p-8 bg-blacks-300 rounded-xl shadow-block hover:scale-[1.02] transition-all duration-300"
              >
                <h2 className="text-xl font-bold mb-4">{item.title}</h2>
                <p className="text-whites-200 mb-4">{item.text}</p>
                <Link
                  href={`mailto:${item.mail}`}
                  className="inline-flex items-center gap-2 text-accent border-accent border-b text-[18px] text-link-hover"
                >
                  {item.mail}
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="mt-[100px] max-md:mt-[64px] max-md:text-center">
        <Container>
          <Titles as="h3" text="Социальные сети" className="text-center mb-4" />
          <div className="gap-8 text-lg grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 text-center">
            {otherLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="hover:text-accent transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <section className="mb-9 max-md:pt-4 mt-[100px] max-md:mt-[64px] max-md:text-center">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-block">
              <Image
                src="/bg-group.jpg"
                alt="Live performance"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
            <div className="space-y-4">
              <Titles as="h3" text="Мы открыты к сотрудничеству" />
              <Paragraph
                text="Eternal Abyss активно выступает на сцене и сотрудничает
                с организаторами, продюсерами и медиа-площадками."
              />
              <Paragraph
                text="Если вы хотите стать частью нашего пути — напишите нам.
                Мы внимательно относимся к каждому предложению."
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
