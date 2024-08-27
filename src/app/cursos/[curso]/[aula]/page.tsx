import { getAula } from "@/api/cursos";

type PageParams = {
  params: {
    curso: string;
    aula: string;
  };
};

export default async function AulaPage({ params }: PageParams) {
  const aula = await getAula(params.curso, params.aula);
  console.log(aula);
  return (
    <main>
      <h1>Página da aula: {aula.nome}</h1>
      <p>Descrição: {aula.descricao}</p>
    </main>
  );
}
