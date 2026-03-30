class Bruxo {
    constructor(nome,idade, matricula, nivel, casa ){
        this.nome = nome
        this.idade = idade
         this.nivel = nivel
        this.casa = casa
          this.matricula = matricula

    }
}

const Ana = new Bruxo ('Ana', 364, 'bruxa', 'iniciante', 'amazonas')
console.log(Ana.nome)
console.log(Ana.idade)
console.log(Ana.matricula)
console.log(Ana.nivel)
console.log(Ana.casa)



console.log(`ola meu nome e ${Ana.nome} e tenho ${Ana.idade}. Meu nivel e ${Ana.nivel} anos, sou da casa ${Ana.casa} e minha matricula e ${Ana.matricula}`)