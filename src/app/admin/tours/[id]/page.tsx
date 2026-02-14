import { Container } from "@/shared";
import { HeroTitle } from "@/widgets/hero-title";

type Props = {
  params: { id: string };
};
export default async function TourId({ params }: Props) {
  const id = (await params).id;
  return (
    <>
      <HeroTitle title="Eternal Abyss" text={`Редактирование тура Id:${id}`} />

      <section className="mt-[100px] max-md:mt-[30px] mb-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div
              className="
                rounded-xl
                main-gradient-90-deg
                shadow-block
                p-8
                flex flex-col gap-8
              "
            >
              {/* Дата и время */}
              <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-whites-100/60">Дата</label>
                  <input
                    type="text"
                    placeholder="15 Марта 2026"
                    className="
                      bg-black/30
                      border border-whites-100/10
                      rounded-md
                      px-4 py-3
                      text-whites-100
                      focus:border-accent
                      outline-none
                      transition-colors
                    "
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm text-whites-100/60">Время</label>
                  <input
                    type="text"
                    placeholder="20:00"
                    className="
                      bg-black/30
                      border border-whites-100/10
                      rounded-md
                      px-4 py-3
                      text-whites-100
                      focus:border-accent
                      outline-none
                      transition-colors
                    "
                  />
                </div>
              </div>

              {/* Локация */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-whites-100/60">
                  Локация (город, страна)
                </label>
                <input
                  type="text"
                  placeholder="Берлин, Германия"
                  className="
                    bg-black/30
                    border border-whites-100/10
                    rounded-md
                    px-4 py-3
                    text-whites-100
                    focus:border-accent
                    outline-none
                    transition-colors
                  "
                />
              </div>

              {/* Тип площадки + Название */}
              <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-whites-100/60">
                    Тип площадки
                  </label>
                  <input
                    type="text"
                    placeholder="Клуб"
                    className="
                      bg-black/30
                      border border-whites-100/10
                      rounded-md
                      px-4 py-3
                      text-whites-100
                      focus:border-accent
                      outline-none
                      transition-colors
                    "
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm text-whites-100/60">
                    Название площадки
                  </label>
                  <input
                    type="text"
                    placeholder="Black Void"
                    className="
                      bg-black/30
                      border border-whites-100/10
                      rounded-md
                      px-4 py-3
                      text-whites-100
                      focus:border-accent
                      outline-none
                      transition-colors
                    "
                  />
                </div>
              </div>

              {/* Ссылка на билеты */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-whites-100/60">
                  Ссылка на билеты
                </label>
                <input
                  type="url"
                  placeholder="https://example.com/tickets/berlin"
                  className="
                    bg-black/30
                    border border-whites-100/10
                    rounded-md
                    px-4 py-3
                    text-whites-100
                    focus:border-accent
                    outline-none
                    transition-colors
                  "
                />
              </div>

              {/* Кнопки */}
              <div className="flex gap-4 pt-6">
                <button
                  className="
                    px-6 py-3
                    bg-accent
                    text-black
                    rounded-md
                    font-semibold
                    hover:opacity-90
                    transition-opacity
                  "
                >
                  Сохранить изменения
                </button>

                <button
                  className="
                    px-6 py-3
                    border border-red-500/40
                    text-red-400
                    rounded-md
                    hover:bg-red-500/10
                    transition-colors
                  "
                >
                  Удалить тур
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
