console.clear();
var teclado = require('prompt-sync')();
var temperaturaC = parseFloat(teclado("Digite a temperatura em graus celsius"));
var temperaturaF = (temperaturaC * (5 / 9) + 32);
console.clear;
console.log("A temperatura em graus farenheint \u00E9 ".concat(temperaturaF, " "));
