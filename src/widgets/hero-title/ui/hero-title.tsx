export const HeroTitle = ({ text, title }: { text: string; title: string }) => {
  return (
    <section className="min-h-[55vh] flex items-center justify-center text-center main-gradient-90-deg">
      <div className="max-w-3xl space-y-6">
        <h1 className="text-5xl font-bold uppercase">{title}</h1>
        <p className="text-whites-200 text-lg">{text}</p>
      </div>
    </section>
  );
};
