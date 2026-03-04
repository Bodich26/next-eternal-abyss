import { Container, Links } from "@/shared";
import { PUBLIC_ROUTES } from "@/../routes";
import { ArrowLeft } from "lucide-react";
import { HeroTitle } from "@/widgets/hero-title";
import { getMerchId } from "@/entities/merch";
import { MerchForm } from "@/features/merch-form";

type Props = {
  params: { id: string };
};
export default async function MerchId({ params }: Props) {
  const id = (await params).id;
  const currentMerch = await getMerchId(id);

  return (
    <>
      <HeroTitle title="Eternal Abyss" text={`Редактирование мерча Id: ${id}`}>
        <Links
          text={"Вернуться к мерчу"}
          href={`${PUBLIC_ROUTES.ADMIN}/${PUBLIC_ROUTES.MERCH}`}
          size={"16px"}
          Icon={ArrowLeft}
          className="inline-flex flex-row-reverse items-center"
        />
      </HeroTitle>
      <section className="mt-[100px] max-md:mt-[30px] mb-16">
        <Container>
          {currentMerch ? (
            <MerchForm initialData={currentMerch} />
          ) : (
            <p className="text-whites-200 text-lg text-center">
              Произошла ошибка при получении мерча
            </p>
          )}
        </Container>
      </section>
    </>
  );
}
