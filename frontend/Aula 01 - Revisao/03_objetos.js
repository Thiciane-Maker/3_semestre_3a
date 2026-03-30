let produto = {
    'nome': 'iphone',
    'modelo': '17',
    'preco': 10000,
    'memoria': 256

}

console.log(produto.preco);

let aluno = {
    'nome': 'douglas',
    'idade': 37,
    'turma': "3 A",
    "mae": {
        'nome': "marli",
        "telefone": '18 92929292929'
    }
}

console.log (`${aluno.nome}`);
console.log (`${aluno.mae.nome}`);

//Desestruturando um objeto
let nomeAluno = aluno.nome;
//let idade= aluno.idade;
//let turma = aluno.turma;
//let mae = aluno.mae;
let {idade, turma, mae} = aluno;