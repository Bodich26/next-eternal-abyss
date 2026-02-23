import { adminNav, Container, Links } from "@/shared";
import { HeroTitle } from "@/widgets/hero-title";

export default function Admin() {
  return (
    <>
      <HeroTitle
        title="Eternal Abyss"
        text="Админка для управления контентом."
      />
      <section className="mt-[100px] max-md:mt-[30px] mb-9">
        <Container>
          <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1 ">
            {adminNav.map((item) => (
              <div
                key={item.href}
                className="p-8 bg-blacks-300 rounded-xl shadow-block hover:scale-[1.02] transition-all duration-300"
              >
                <h2 className="text-xl font-bold mb-4">{item.title}</h2>
                <p className="text-whites-200 mb-4">{item.description}</p>
                <Links text={"Перейти"} href={item.href} size="16px" />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
