import { Container, Paragraph, Titles } from "@/shared";

export default function LoadingPage({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <section className=" absolute inset-0">
      <div className="fixed inset-0 z-50 flex items-center justify-center main-gradient-90-deg overflow-hidden">
        <Container className="flex flex-col items-center justify-center text-center relative z-10">
          <div className="p-12 max-md:p-8 max-sm:p-6 max-w-[600px] w-full animate-fade-in">
            <Titles as="h3" text={title} />
            <Paragraph text={text} className="mb-5" />
            <div className="animate-spin rounded-full h-11 w-11 border-t-4 border-whites-200 border-opacity-70 mx-auto"></div>
          </div>
        </Container>
      </div>
    </section>
  );
}
