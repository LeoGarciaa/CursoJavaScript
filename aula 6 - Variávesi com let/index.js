let nome = 'João' //String

console.log(nome, 'Nasceu em 1984.');
console.log('Em 2000', nome, 'conheceu Maria');
console.log(nome, 'casou-se com Maria em 2012');
console.log('Maria teve 1 filho com', nome, 'em 2015');
console.log('O filho de', nome, 'se chama Eduardo');

let name; //declara variável sem atribuir valor
//let nome; Não pode redeclarar variavés
console.log(name);

/*
//Não podemos criar variáveis com palavras reservadas
let let;
let if;

//Precisam ter nomes significativos
let n = 'João';/ Não fazer
let nome = 'João';/ Correto

//Não pode começar com numero
let 1nome;

//Não podem conter espaços ou traços
let nome-cliente;
let nome cliente;

//Utilizar camelCasel
let nomeCliente;
let nomeCompleto;

//São Case-Sensitive*/
let nomeCliente = 'Leonardo';
let nomecliente = 'Augusto';
console.log(nomeCliente, nomecliente);

//Não podemos redeclar variáveis com let
//let nomeCliente = 'Leonardo'; Erro
nomeCliente = 'Augusto';
console.log(nomeCliente, nomecliente);
