class Bruxo {
    constructor(nome, nivelMagia, casa) {
        this.nome = nome
        this.nivelMagia = nivelMagia
        this.casa = casa
    }

    apresentar() {
        return `Bruxo ${this.nome} | Casa: ${this.casa} | Nível de Magia: ${this.nivelMagia}`
    }

    lancarFeitico(feitico) {
        return `${this.nome} lançou o feitiço "${feitico}" com poder ${this.nivelMagia}`
    }

    Energia() {
        return `${this.nome} está atacando energia mágica`
    }
}

class BruxoGrifinoria extends Bruxo {
    constructor(nome, nivelMagia) {
        super(nome, nivelMagia, 'Grifinória')
    }

    lancarFeitico(feitico) {
        return `${this.nome} da Grifinória lançou "${feitico}" com poder ${this.nivelMagia}`
    }
}

class BruxoSonserina extends Bruxo {
    constructor(nome, nivelMagia) {
        super(nome, nivelMagia, 'Sonserina')
    }

    lancarFeitico(feitico) {
        return `${this.nome} da Sonserina lançou "${feitico}" com poder ${this.nivelMagia}`
    }
}

const momo = new BruxoGrifinoria('Momo', 95)
console.log(momo.apresentar())
console.log(momo.lancarFeitico('Expelliarmus'))

const juju = new BruxoSonserina('juju', 85)
console.log(juju.apresentar())
console.log(juju.lancarFeitico('Abracadabra'))
