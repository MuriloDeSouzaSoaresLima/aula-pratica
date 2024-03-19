console.clear();
const teclado = require('prompt-sync') ()

let n1 : number = parseFloat(teclado(`Digite o primeiro número`));
let n2 : number = parseFloat(teclado(`Digite o segundo número`));
let n3 : number = parseFloat(teclado(`Digite o terceiro número`));
let n4 : number = parseFloat(teclado(`Digite o quarto número`));
let n5 : number = parseFloat(teclado(`Digite o quinto número`));
let n6 : number = parseFloat(teclado(`Digite o sexto número`));
let n7 : number = parseFloat(teclado(`Digite o sétimo número`));
let n8 : number = parseFloat(teclado(`Digite o oitavo número`));
let n9 : number = parseFloat(teclado(`Digite o nono número`));
let n10 : number = parseFloat(teclado(`Digite o décimo número`));

console.clear();

console.log(`A média é ${(n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10)/10}`)