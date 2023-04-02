const nome = 'João' //String

console.log(nome, 'Nasceu em 1984.');
console.log('Em 2000', nome, 'conheceu Maria');
console.log(nome, 'casou-se com Maria em 2012');
console.log('Maria teve 1 filho com', nome, 'em 2015');
console.log('O filho de', nome, 'se chama Eduardo');


/*
//Não podemos declarar sem passar valor
const nome;

//Não podemos criar constantes com palavras reservadas
const let  = 'let';
const if = 'if';

//Precisam ter nomes significativos
const n = 'João';/ Não fazer
const nome = 'João';/ Correto

//Não pode começar com numero
const 1nome;

//Não podem conter espaços ou traços
const nome-cliente;
const nome cliente;

//Utilizar camelCasel
const nomeCliente;
const nomeCompleto;

//São Case-Sensitive*/
const nomeCliente = 'Leonardo';
const nomecliente = 'Augusto';
console.log(nomeCliente, nomecliente);

//Não podemos modificar o valor de uma constante
//const nomeCliente = 'Leonardo'; 
//nomeCliente = 'Augusto';

const primeiroNumero = 5;
const segundoNumero = 10;
const multiplicadoTripicado = '3'
const resultado = primeiroNumero + segundoNumero;
const resultadoDuplicado = resultado * 2;
const resultadoTriplicado = resultado * 3;


console.log(primeiroNumero, '+', segundoNumero);

console.log(typeof primeiroNumero);
console.log(typeof (primeiroNumero,segundoNumero));

console.log(resultado);

console.log('*', multiplicadoTripicado);

console.log(typeof multiplicadoTripicado);
console.log(typeof (resultado,multiplicadoTripicado));

console.log(resultadoDuplicado);


