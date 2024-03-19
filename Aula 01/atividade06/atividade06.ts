console.clear();
const teclado = require(`prompt-sync`)();

let idade: number = 0;
let salario: number = 0;
let totPessoasNaCondicao: number = 0;
let pessoasContabilizadas: number = 0;

console.clear();

while(pessoasContabilizadas <= 5){

    idade = parseInt(teclado(`Digite a idade do funcionário`));
salario = parseFloat(teclado(`Digite o salário do funcionário`));
console.log(``);

if (idade < 30 && salario > 3000) {
    totPessoasNaCondicao++;
    pessoasContabilizadas++;
} else {
    pessoasContabilizadas++;
}
}

console.log(`O total de pessoas que atendem a condição é ${totPessoasNaCondicao}`);