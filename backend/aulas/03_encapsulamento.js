class Pessoa {

    #rg; 


    nome;
    idade;

    constructor(nome, idade, rg) {
        this.nome = nome;
        this.idade = idade;
        this.#rg = rg;
    }

    mostrarRg() {
      
        return this.#rg;
    }

    apresentar() {
        return `${this.nome}, tenho ${this.idade} anos`;
    }
}

const ana = new Pessoa('Ana', 28, '112121-18'); 

console.log(ana.mostrarRg());
console.log(ana.apresentar());

console.log(ana.nome); 
