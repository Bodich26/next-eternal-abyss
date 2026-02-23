import { NewForm } from "@/features/new-form";
import { Container, Paragraph, Titles } from "@/shared";

export const GroupNews = () => {
  return (
    <section className="mt-[120px] max-[425]:mt-[80px]!">
      <Container className="relative">
        <div className="bg-section-news" />
        <div className="flex flex-col gap-8 justify-center items-center text-center pb-[256px] max-sm:pb-[120px]">
          <div className="w-[504px] flex flex-col justify-center items-center gap-4 max-sm:w-full">
            <Titles as="h3" text="Новости группы" />
            <Paragraph
              text="Подпишись на рассылку Eternal Abyss и следи за всеми обновлениями:
              музыка, туры, закулисье и важные анонсы напрямую от группы."
            />
          </div>
          <NewForm />
        </div>
      </Container>
    </section>
  );
};
