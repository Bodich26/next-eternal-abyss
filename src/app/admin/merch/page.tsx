import { getMerch, MerchItem } from "@/entities/merch";
import { Container } from "@/shared";
import { HeroTitle } from "@/widgets/hero-title";

export default async function Merch() {
  const merchData = await getMerch({ isCached: false });
  return (
    <>
      <HeroTitle title="Eternal Abyss" text="Админка для управления Мерчем." />
      <section className="mt-[100px] max-md:mt-[30px] mb-9">
        {!merchData ||
          (merchData.length === 0 && (
            <p className="text-whites-200 text-lg text-center">
              Мерч не найден!
            </p>
          ))}
        <Container>
          <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1 ">
            {merchData.map((merch) => (
              <MerchItem key={merch.id} merch={merch} isAdmin={true} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
