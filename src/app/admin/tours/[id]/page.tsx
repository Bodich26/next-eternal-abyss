import { Buttons, Container, Inputs } from "@/shared";
import { HeroTitle } from "@/widgets/hero-title";

type Props = {
  params: { id: string };
};
export default async function TourId({ params }: Props) {
  const id = (await params).id;
  return (
    <>
      <HeroTitle title="Eternal Abyss" text={`Редактирование тура Id: ${id}`} />
      <section className="mt-[100px] max-md:mt-[30px] mb-16">
        <Container>
          <form className="max-w-4xl mx-auto">
            <div
              className="
                rounded-md
                main-gradient-90-deg
                shadow-block
                p-8
                flex flex-col gap-8
              "
            >
              <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
                <Inputs
                  id={"1"}
                  type={"text"}
                  placeholder={"15 Марта 2026"}
                  label={"Дата"}
                />
                <Inputs
                  id={"2"}
                  type={"text"}
                  placeholder={"20:00"}
                  label={"Время"}
                />
              </div>
              <Inputs
                id={"3"}
                type={"text"}
                placeholder={"Берлин, Германия"}
                label={"Локация (Город, Страна)"}
              />
              <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
                <Inputs
                  id={"4"}
                  type={"text"}
                  placeholder={"Клуб"}
                  label={"Тип площадки"}
                />
                <Inputs
                  id={"5"}
                  type={"text"}
                  placeholder={"Black Void"}
                  label={"Название площадки"}
                />
              </div>
              <Inputs
                id={"6"}
                type={"url"}
                placeholder={"https://example.com/tickets/berlin"}
                label={"Ссылка на билеты"}
              />

              <div className="flex gap-4 pt-6 justify-between">
                <Buttons
                  type="submit"
                  text="Сохранить изменения"
                  as="button"
                  variant="primary"
                />
                <Buttons
                  type="submit"
                  text="Удалить тур"
                  as="button"
                  variant="danger"
                />
              </div>
            </div>
          </form>
        </Container>
      </section>
    </>
  );
}
