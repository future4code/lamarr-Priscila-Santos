// Exercicio 1.1
console.log(10) 
console.log(10,10) 

//Exercico 2.2
// dá erro na execução porque é atribuido dois valores para b, 10 e 20.

//Exercico 3.3
let horaTrabalhadaPorDia = prompt("Quantas horas você trabalha por dia?")
let diariaPorDia = prompt("Quanto você recebe por dia?")

//Exercicio 1.2
let nome =  null
let idade = null 

console.log(typeof nome)
console.log(typeof idade)

// não há valor na variavel então está indefinida.

nome = prompt("Qual o seu nome?")
idade = prompt("Qual a sua idade?")

console.log(typeof nome)
console.log(typeof idade)

/*A primeira a variavel ficou como object porque não estava definida
 e após ser definida deu o tipo que é string*/

 console.log( "olá, ", nome, "você tem, " ,idade, "anos?")

 //Exercico 2.2

 let cachorro = prompt("Você tem cachorro? Sim/Não")
 let carro = prompt("Você tem carro? Sim/Não")
 let chocolate = prompt("Você gosta de chocolate? Sim/Não")

 let rCachorro = (cachorro ==="Sim")
 let rCarro = (carro === "Sim")
 let rChocolate = (chocolate === "Sim")

 console.log(rCachorro, rCarro, rChocolate)

 //Exercicio 3.3
let a = 10
let b = 25
let c = null

 a = 10
 b = 25
 c = null
 c = b
 b = a
 a = c 
 console.log( a, b)
















