console.clear();
var teclado = require("prompt-sync")();
var idade = parseFloat(teclado("Digite sua idade: "));
console.clear();
if (idade >= 18) {
    console.log("Voc\u00EA \u00E9 maior de idade");
}
else {
    console.log("Voc\u00EA \u00E9 menor de idade");
}
