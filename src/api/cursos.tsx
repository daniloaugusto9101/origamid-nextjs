type Curso = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  total_aulas: number;
  total_horas: number;
};

type Aula = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  curso_id: number;
  tempo: number;
  ordem: number;
};

export async function getCursos() {
  const data = await fetch("https://api.origamid.online/cursos");
  return (await data.json()) as Curso[];
}

export async function getCurso(curso: string) {
  const data = await fetch(`https://api.origamid.online/cursos/${curso}`);
  return (await data.json()) as Curso & {
    aulas: Aula[];
  };
}

export async function getAula(curso: string, aula: string) {
  const data = await fetch(
    `https://api.origamid.online/cursos/${curso}/${aula}`
  );
  return (await data.json()) as Aula;
}
