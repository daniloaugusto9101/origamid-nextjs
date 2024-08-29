type Acoes = {
  simbolo: string;
  atualizada: string;
};

export default async function AcoesPage() {
  const response = await fetch("https://api.origamid.online/acoes/lua", {
    next: {
      revalidate: 5,
    },
  });
  const data = (await response.json()) as Acoes;
  return (
    <main>
      <h1>Página de Ações</h1>
      <p>{data.simbolo}</p>
      <p>{data.atualizada}</p>
    </main>
  );
}
