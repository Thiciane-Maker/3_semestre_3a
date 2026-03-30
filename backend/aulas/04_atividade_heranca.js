class Bruxo {
    constructor(nome, nivelMagia, casa) {
        this.nome = nome
        this.nivelMagia = nivelMagia
        this.casa = casa
    }

    apresentar() {
        return `Olá, eu sou ${this.nome}, da casa ${this.casa}`
    }

    lancarFeitico(feitico) {
        return `${this.nome} lançou o feitiço ${feitico}`
    }
}

const momo = new Bruxo('Momo', 90, 'Grifinória')

console.log(momo.apresentar())
console.log(momo.lancarFeitico('Expelliarmus'))
