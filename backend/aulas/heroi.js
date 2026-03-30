class Heroi {
    constructor(nome, nivelForca, idade, poder) {
        this.nome = nome
        this.nivelForca = nivelForca
        this.idade = idade
        this.poder = poder
    }

    #segredo() {
        return 'método privado'
    }

    mostrarSegredo() {
        return this.#segredo()
    }

    apresentar() {
        return `Herói ${this.nome} | Força: ${this.nivelForca} | Poder: ${this.poder} | Idade: ${this.idade}`
    }

    atacar(forca) {
        return `${this.nome} atingiu um inimigo com nível de força ${forca} usando o poder ${this.poder}`
    }

    ataqueDePoder() {
        return `${this.nome} está atacando com seu poder`
    }
}

class HeroiVoador extends Heroi {
    constructor(nome, nivelForca, idade) {
        super(nome, nivelForca, idade, 'Voar')
    }

    atacar() {
        return `${this.nome} está com nível de força ${this.nivelForca}`
    }

    ataqueDePoder() {
        return `${this.nome} está voando`
    }
}


const heroi = new Heroi('Thor', 200, 1500, 'Trovão')
console.log(heroi.mostrarSegredo())

const momo = new HeroiVoador('Momo', 105, 15)
console.log(momo.apresentar())
console.log(momo.atacar())
console.log(momo.ataqueDePoder())
