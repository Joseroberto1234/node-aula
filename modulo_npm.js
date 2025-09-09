// Importação de módulo via npm
const minimist = require("minimist")

// Uso do minimist pra pegar informações vinda do prompt
const argumentos = minimist(process.argv.slice(2))
console.log(argumentos);

// Guarda informações em variáveis
const timeDele = argumentos["time"]
const nomeDele = argumentos["Jogador"]

//Utiliza as váriavéis para mostrar uma mensagem personalizada
console.log(`O nome dele é: ${nomeDele}, e seu time é: ${timeDele}`);