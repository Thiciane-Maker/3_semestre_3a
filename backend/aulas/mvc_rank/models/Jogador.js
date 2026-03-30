export default class Jogador {
  constructor(id, nome, pontos = 0) {
    this.id = id;
    this.nome = nome;
    this.pontos = pontos;
  }

  adicionarPontos(valor) {
    this.pontos += valor;
  }
}