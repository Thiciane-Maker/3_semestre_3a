import { useState, useEffect } from "react";

const Aula09_ListaNomes = () => {
  const [nomes, setNomes] = useState([]);
  const [novoNome, setNovoNome] = useState("");

  useEffect(() => {
    const dados = localStorage.getItem("lista_nomes");
    if (dados) {
      setNomes(JSON.parse(dados));
    }
  }, []);

  function botaoAdicionar() {
    if (novoNome === "") return;

    const novaLista = [...nomes, novoNome];
    setNomes(novaLista);

    localStorage.setItem("lista_nomes", JSON.stringify(novaLista));

    setNovoNome("");
  }

  function botaoExcluir(nome) {
    const listaAtualizada = nomes.filter(
      (item) => item !== nome
    );
    setNomes(listaAtualizada);

    localStorage.setItem("lista_nomes", JSON.stringify(listaAtualizada));
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Digite seu nome e o que levou"
        value={novoNome}
        onChange={(e) => setNovoNome(e.target.value)}
      />

      <button onClick={botaoAdicionar}>Adicionar</button>

      <ul>
        {nomes.map((nome, index) => (
          <li key={index}>
            {nome}
            <button onClick={() => botaoExcluir(nome)}>
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Aula09_ListaNomes;