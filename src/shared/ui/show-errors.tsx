import { Buttons } from "./buttons";
import { Container } from "./container";
import { Paragraph } from "./paragraph";
import { Titles } from "./titles";

export const ShowErrors = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <section className=" absolute inset-0">
      <div className="fixed inset-0 z-50 flex items-center justify-center main-gradient-90-deg overflow-hidden">
        <Container className="flex flex-col items-center justify-center text-center relative z-10">
          <div className="p-12  max-md:p-8 max-sm:p-6 max-w-[600px] w-full animate-fade-in">
            <Titles as="h3" text={"Ошибка"} />
            <Paragraph
              text={error.message || "Произошла неизвестная ошибка"}
              className="mb-5"
            />
            <Buttons
              as="button"
              text="Попробовать снова"
              onClick={() => reset()}
            />
          </div>
        </Container>
      </div>
    </section>
  );
};
