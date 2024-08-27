import { getCurso } from "@/api/cursos";
import Link from "next/link";

type PageParams = {
  params: {
    curso: string;
  };
};

export default async function CursoPage({ params }: PageParams) {
  const curso = await getCurso(params.curso);
  return (
    <main>
      <p>Params: {params.curso}</p>
      <h1>Página do curso: {curso.nome}</h1>
      <p>Total de aulas: {curso.total_aulas}</p>
      <br />
      <ul>
        {curso.aulas.map((aula) => (
          <Link key={aula.id} href={`${params.curso}/${aula.slug}`}>
            <li>{aula.nome}</li>
          </Link>
        ))}
      </ul>
    </main>
  );
}
