import { getMerch, MerchItem } from "@/entities/merch";
import { Container } from "@/shared";
import { HeroTitle } from "@/widgets/hero-title";

export default async function Merch() {
  const merchData = await getMerch({ isCached: true });
  return (
    <>
      <HeroTitle
        title="Eternal Abyss"
        text="Комфорт и характер в каждой детали."
      />
      <section className="mt-[100px] max-md:mt-[30px] mb-9">
        <Container>
          <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1 ">
            {merchData.map((merch) => (
              <MerchItem key={merch.id} merch={merch} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
