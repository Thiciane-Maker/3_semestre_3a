class Bruxo {
    #energiaMagica = 100;

    nome;
    nivelMagia;

    constructor(nome, nivelMagia = 1) {
        this.nome = nome;
        this.nivelMagia = nivelMagia;
    }

    verEnergia() {
        return this.#energiaMagica;
    }

    lancarFeitico() {
        this.#energiaMagica -= 10;
    }

    recarregarMagia() {
        this.#energiaMagica = 100;
    }
}

const snape = new Bruxo('Severo', 6);

console.log(snape);
console.log(snape.nivelMagia);
console.log(snape.verEnergia());
snape.lancarFeitico();
console.log(snape.verEnergia());
snape.recarregarMagia();
console.log(snape.verEnergia());
