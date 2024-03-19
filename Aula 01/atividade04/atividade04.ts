console.clear();
const teclado = require ('prompt-sync') ();

let temperaturaF : number = parseFloat(teclado(`Digite a temperatura em farenheint`))
let temperaturaC : number = ((temperaturaF-32)*5/9)

console.clear

console.log(`A temperatura em graus celsius é ${temperaturaC} `)