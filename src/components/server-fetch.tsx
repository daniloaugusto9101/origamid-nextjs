type Produto = {
  nome: string;
  id: number;
};

export default async function ServerFeth() {
  const data = await fetch("https://api.origamid.online/produtos");
  const produto = (await data.json()) as Produto[];
  return (
    <main>
      <h1>Server Fetch</h1>
      <ul>
        {produto.map((item) => (
          <li key={item.id}>{item.nome}</li>
        ))}
      </ul>
    </main>
  );
}
