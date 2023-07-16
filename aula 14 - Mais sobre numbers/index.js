

let num1 = 10.;5754254564; //number
let num2 = 2.5 ;//number
let num3 = 3; //number
let temp = 'a' ;


//transformar em string
console.log(num1.toString() + num2 );
//num1 = num1.toString();

//arredondar numero
console.log(num1.toFixed(2));

//verificar se é numero inteito
console.log(Number.isInteger(num1));


//verificar se não é um numero
console.log(Number.isNaN(temp));


//retirar impresição de numeros float
num1 = 0.7;
num2 = 0.1;

num1 += num2;

num1 = Number(num1.toFixed(2));
console.log(num1);
console.log(Number.isInteger(num1));
