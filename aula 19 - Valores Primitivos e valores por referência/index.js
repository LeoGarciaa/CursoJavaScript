/*
Primitivos (imutáveis) - string, number, boolean, undefine,
null (bigint, symbol) - valor
*/

let a = 'A';
let b = a; // Cópia
console.log(a, b); 

a = 'Outra Coisa'; //Não altera b
console.log(a, b); 


/*
Referência (mutável) - array, object, function - Passados por referência
Para fazer uma cópia desses tipos deve usar um spread - > CÓPIA = [...'VARIAVEL REF'] // {...'VARIAVEL REF'}
*/

let c  = [1,2,3];
let d = c; // referencia
//let d = [...c]; //Spread -> cópia
console.log(c, d);

c.push(4);
console.log(c, d);

d.pop();
console.log(c,d);


/**************************/
const cliente = {
        nome : 'Leonardo',
        sobrenome: 'Augusto'
};

//const funcionario = cliente; //referencia
//const funcionario = {...cliente}; //Cópia

