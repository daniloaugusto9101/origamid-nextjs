"use client";

import React from "react";

type Produto = {
  nome: string;
  id: number;
};

export default function ClientFetch() {
  const [produto, setProtudo] = React.useState<Produto[]>([]);
  React.useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://api.origamid.online/produtos");
      const json = (await response.json()) as Produto[];
      setProtudo(json);
    }
    fetchProducts();
  }, []);

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
