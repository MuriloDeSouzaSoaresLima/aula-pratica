console.clear();
var teclado = require('prompt-sync')();
var temperaturaF = parseFloat(teclado("Digite a temperatura em farenheint"));
var temperaturaC = ((temperaturaF - 32) * 5 / 9);
console.clear;
console.log("A temperatura em graus celsius \u00E9 ".concat(temperaturaC, " "));
