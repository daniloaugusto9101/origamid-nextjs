import { getCursos } from "@/api/cursos";
import Link from "next/link";

export default async function CursosPage() {
  const cursos = await getCursos();
  return (
    <main>
      <h1>Página de cursos</h1>
      {cursos.map((curso) => (
        <div key={curso.id}>
          <p>
            Curso {curso.nome} / {curso.descricao} / Total de aulas:{" "}
            {curso.total_aulas}
          </p>
          Link <Link href={`/cursos/${curso.slug}`}>{curso.nome} </Link>
        </div>
      ))}
    </main>
  );
}
