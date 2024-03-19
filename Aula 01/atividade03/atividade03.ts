console.clear();
const teclado = require ('prompt-sync') ();

let temperaturaC : number = parseFloat(teclado(`Digite a temperatura em graus celsius`))
let temperaturaF : number = (temperaturaC*(5/9) + 32)

console.clear

console.log(`A temperatura em graus farenheint é ${temperaturaF} `)