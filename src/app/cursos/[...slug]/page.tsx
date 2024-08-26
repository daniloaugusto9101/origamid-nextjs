type PageParams = {
  params: {
    slug: string[];
  };
};

export default function CursoPage({ params }: PageParams) {
  console.log(params);
  return (
    <main>
      <p>{params.slug.join("/")}</p>
    </main>
  );
}
