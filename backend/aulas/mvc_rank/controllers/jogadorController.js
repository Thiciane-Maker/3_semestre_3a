import Jogador from "../models/Jogador.js"

let jogadores = [];
let contadorId = 1;

export function listar(req, res) {
  res.render("index", { jogadores });
}

export function adicionar(req, res) {
  const { nome, pontos } = req.body;

  const novoJogador = new Jogador(
    contadorId++,
    nome,
    parseInt(pontos) || 0
  );

  jogadores.push(novoJogador);
  res.redirect("/");
}

export function adicionarPontos(req, res) {
  const id = parseInt(req.params.id);

  const jogador = jogadores.find(jogador => jogador.id === id);

  if (jogador) {
    jogador.adicionarPontos(10);
  }

  res.redirect("/");
}