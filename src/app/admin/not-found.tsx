import { Container, Paragraph, Titles } from "@/shared";
import { Buttons } from "@/shared/ui/buttons";
import { PUBLIC_ROUTES } from "@/../routes";

export default function NotFound() {
  return (
    <section className=" absolute inset-0">
      <div className="fixed inset-0 z-50 flex items-center justify-center main-gradient-90-deg overflow-hidden">
        <Container className="flex flex-col items-center justify-center text-center relative z-10">
          <div className="p-12  max-md:p-8 max-sm:p-6 max-w-[700px] w-full animate-fade-in">
            <Titles as="h3" text={"404 - Страница ненайдена"} />
            <Paragraph
              text={"Потерялись в админке? Такого альбома или страницы нет."}
              className="mb-5"
            />
            <Buttons
              as="link"
              text="Попробовать снова"
              variant="primary"
              href={PUBLIC_ROUTES.HOME}
              className="m-auto w-[280px]"
            />
          </div>
        </Container>
      </div>
    </section>
  );
}
