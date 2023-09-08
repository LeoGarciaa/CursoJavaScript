//Escreva uma função que recebe um numero e :
//Número é divisivel por 3 retorne - Fizz
//Número é divisivel por 5 retorne - Buzz
//Número é divisivel por 3 e por 5 retorne - FizzBuzz
//Número não é divisel por 3 e 5 retorne - O próprio valor
//Checar se o número não é um número retorne - O próprio valor
// Use a função com números de 0 a 100
function fizzBuzz(numero){
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0 ) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    
    return numero;
}

for (let i = 0; i<= 100; i++){
    console.log(i,fizzBuzz(i));
}