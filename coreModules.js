// Importanto um core module
// fs = file system, pra mexer em arquivos e pastas
const fs = require('fs');

// Lê um arquivo
fs.readFile("teste.txt", "utf8", (erro,dados) => {
    if(erro){
        console.log(erro);        
    }
    else{
                console.log(dados)
    }
} )


var mensagem = "Arquivo criado com sucesso"
//Escrever/criar um arquivo
fs.writeFile("teste2oretorno.txt", mensagem, "utf8", (erro) => {
    if(erro){
        console.log(erro);
    }
    else{
        console.log("Arquivo criado successulfuly");
    }
})

var mensagem2 = "Mensagem nova"

fs.appendFile("teste2oretorno.txt", mensagem2, "utf8", (erro) => {
    if(erro){
        console.log(erro);
    }
    else{
        console.log("Arquivo editado com sucesso");
    }
})

// Excluir um arquivo
fs.unlink("teste2oretorno.txt", (erro) => {
    if(erro){
        console.log(erro);
    }
    else{
        console.log("Arquivo foi de comes e bebes");
    }
})


//Exercicio
var mensagem
//Escrever/criar um arquivo
fs.writeFile("teste3.txt", mensagem, "utf8", (erro) => {
    if(erro){
        console.log(erro);
    }
    else{
        console.log("Arquivo criado successulfuly");
    }
})

// Função escrita padrão
// function soma(a,b){
//     return a + b
// }

// soma(5,3)

// Função de seta
// var resultado = (a,b) => { a + b }