/*
* ()
* ** Exponenciação
* * Multiplicação e / Divisão e % Resto da divisão
* + Adição / Concatenação e - Subtração
*
* ++ incremento e -- decremento
* Operados de atribuição *= /= += -= **=
*/

const num1 = 12;
const num2 = 5;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

console.log(num1 + num2 * num2);
console.log((num1 + num2) * num2);

let contador = 0;
console.log(contador);
contador ++;
console.log(contador);
++ contador;
console.log(contador);
console.log(contador++);
console.log(++contador);
console.log(--contador);
console.log(contador--);
contador --;
console.log(contador);

contador = contador + 2;
console.log(contador);

contador += 2;
console.log(contador);

contador **= 2;
console.log(contador);


// NaN - Not a number
// parseInt (inteiro)
// parseFloat (decimais)
// Number
const num = 10;
//const string = Number('Teste'); //Erro NaN
const string = Number('5'); //Converte string em numero
console.log (typeof string);
console.log (num + string);
