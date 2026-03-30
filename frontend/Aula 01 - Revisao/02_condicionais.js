const idade = 16;

if (idade >= 18){
    console.log("Você é um adulto");
} 
else if (idade >= 13 && idade <= 17){
    console.log("Você é um adolescente");
}
else if (idade >= 1 && idade <= 12){
    console.log("Você é criança");
}
else {
  
    console.log("Você é de menor"); 
}


let nota = 8;

let status; 
if (nota >= 7) {
    status = 'APROVADO';
} else {
    status = 'REPROVADO';
}
console.log("If/Else:", status);


let status2 = nota >= 7 ? 'APROVADO' : 'REPROVADO';

console.log("Ternário:", status2);