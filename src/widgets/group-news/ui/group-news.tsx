import { NewsForm } from "@/features/news-form";
import { Container, Titles } from "@/shared";

export const GroupNews = () => {
  return (
    <section className="mt-[120px]">
      <Container className="relative">
        <div className="bg-section-news" />
        <div className="flex flex-col gap-8 justify-center items-center text-center pb-[256px]">
          <div className="w-[504px] flex flex-col justify-center items-center gap-4">
            <Titles as="h3" text="Новости группы" />
            <p className="text-[18px] tracking-wide">
              Подпишись на рассылку Eternal Abyss и следи за всеми обновлениями:
              музыка, туры, закулисье и важные анонсы напрямую от группы.
            </p>
          </div>
          <NewsForm />
        </div>
      </Container>
    </section>
  );
};
