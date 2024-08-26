type PageParams = {
  params: {
    id: string;
  };
};

type Produtos = {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: number;
};

export default async function ProdutoPage({ params }: PageParams) {
  const response = await fetch(
    `https://api.origamid.online/produtos/${params.id}`
  );
  const data = await response.json();
  console.log(data);
  return (
    <main>
      <h1>Produto: {data.nome}</h1>
      <p>id: {data.id}</p>
      <p>Preço R$ {data.preco}</p>
    </main>
  );
}
