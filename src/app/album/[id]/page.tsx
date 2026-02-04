type Props = {
  params: { id: string };
};

export default async function AlbumId({ params }: Props) {
  const id = (await params).id;

  return (
    <section>
      <h1 className="text-4xl">Welcome to the Album ID: {id}</h1>
    </section>
  );
}
