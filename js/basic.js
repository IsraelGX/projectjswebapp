console.log('Olá, Javascript!')

var userName = 'Israel Gomes'

document.getElementById('user-name').innerHTML = userName

// Variaveis //-----------------------------------------------------------------

// var nome = 'Mestre Yoda'
// var idade = 100
// var jedi = true

// console.log(typeof nome)
// console.log(typeof idade)
// console.log(typeof jedi)

// Operadores matematicos //----------------------------------------------------

// var n1 = 7
// var n2 = 2.5

// console.log(typeof n1)
// console.log(typeof n2)

// + para somar 
// - para subtrair
// * para multiplicar
// / para dividir

// var total = n1 + n2
// console.log(total)

// Operadores de comparação //-------------------------------------------------

// var v1 = 5
// var v2 = '5'

// var resultado = v1 !== v2
// console.log(resultado)

// Funções //

// function soma(n1, n2) {
//     console.log(n1 + n2)
// }

// soma(5, 100)

//Boas vindas polpap

// function boasVindas(nome) {
//     alert('Sejam bem vindos(a), ' + nome)
// }

// boasVindas('Israel')

// function soma(n1, n2) {
//     return n1 + n2

// }

// var resultado = soma(5,5)
// console.log(resultado)


// Controle de fluxos // BDD (Desenvolvimento guiado por comportamento)--------------------------------------

// Sendo um cliente correntista do banco
// Posso sacar dinheiro em caixas eletronicos 
// Para poder comprar em lugares que não aceitam o cartão de debito ou credito

// var saldo = 1000

// function saque(valor){

//     if (valor, ('saque') > saldo ) {
//         console.log('Valor do saque superior ao saldo')

//     } else if (valor > 700) {
//         console.log('Valor do saque é superior ao maximo permitido por operação')
//     } else {
//         saldo = saldo - valor
//     }
   
// }

// saque(700)
// console.log(saldo)

// Cenario 1: Saque com sucesso
// Dado que meu saldo é de 1000 reais 
// Quandoo faço um saque de 500 reais
// Então o valor do saque deve ser deduzido do meu saldo 

// Cenario 2: Saque com valor superior ao saldo 
// Dado que meu saldo é de 1000 reais 
// Quando faço um saque de 1001 reais 
// Então não deve deduzir do meu saldo
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao saldo 

// Cenario 3: Saque com valor máximo 
// Dado que meu saldo é de 1000 reais 
// E o valor maximo por operação é de 700 reais 
// Quando faço um saque no valor de 701 reais
// Então não deve deduzir do meu saldo
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao maximo permitido 


// Arrays // ----------------------------------------

//  var gaveteiro = ['Meias', 'Gravatas', 'Documentos', 'Salgadinhos']

//  console.log(gaveteiro[3])

// var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']

// personagens.push('C3p0')
// personagens.push('R2D2')

// // personagens.pop()

// personagens = personagens.filter(function(p){
//     return p !== 'Darth Vader'
// })

// personagens = personagens.filter(function(p){
//     return p === 'Mestre Yoda'
// })

// console.log(personagens)


// controles de repetição (Loops) // Metodos 1,2,3 ---------------------------------------------


// var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader','R2D2']

// Metodo 1 ----------- 

// personagens.forEach(function(p){
//     console.log(p)
// })

// Metodo 2 -----------

// for (var i in personagens){
//     console.log(personagens[i])
// }

// Metodo 3 ------------

// for (var i = 0; i <= 10; i++) {
//     console.log(i)
//     // código vai ser executado até a condição retornar false 
// }

// objetos //---------------------------------

// var yoda = {
//     nome: 'Mestre Yoda',
//     idade: 100,
//     jedi: true,
//     mostra_idade: function() {
//         console.log( `A idade do ${this.nome} é ${this.idade} anos.`)
//     }
// }

// console.log(yoda)
// yoda.mostra_idade()

// constantes // ------------------------------

// const nome = 'Darth Vader'
// console.log(nome)

// nome = 'Mestre Yoda'
// console.log(nome)

