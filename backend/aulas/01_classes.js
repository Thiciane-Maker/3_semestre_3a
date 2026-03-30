//criaçao da classe

class Pessoa{
    //atributos
    nome
    idade

}

const pessoa1 =  new Pessoa()
pessoa1.nome = 'Thiciane'
pessoa1.idade = 17

console.log(pessoa1)

const pessoa2 =  new Pessoa()
pessoa2.nome = 'Ana Clara'
pessoa2.idade = 17

console.log(pessoa2)

class Pessoa2 {
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade

    }
}

const Joao = new Pessoa2 ('joao', 36)
console.log(Joao.nome)
console.log(Joao.idade)
console.log(`ola meu nome e ${Joao.nome} e tenho ${Joao.idade}`)