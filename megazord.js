// Importação de módulo via npm
const minimist = require("minimist")

// Importação de módulo interno, criado por mim
const meuModulo = require("./modulo_interno.js")

// Importantdo um core module
// fs = file system, pra mexer em arquivos e pastas
const fs = require("fs");
const { log } = require("console");

// Uso do minimist pra pegar informações vinda do prompt
const argumentos= minimist(process.argv.slice(2))

// Variáveis para guardar as informações que o usuário colocou
const valor1 = argumentos["a"]
const valor2 = argumentos["b"]

// Usando a funcao soma, do módulo interno
const resultado = meuModulo.soma(valor1,valor2)


fs.writeFile("resultado.txt", resultado, "utf8", (erro, dados)=> {
    if(erro){
            console.log(erro)
        }
        else{
            console.log(dados);
            log("Conta realizada")
        }
   } )

   //node megazord.js --a=10 --b=15 <= Faz o texte ai
