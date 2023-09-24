// arguments -> não functiona em arrow function
function funcao(){
    let total = 0;
    for (let arg of arguments){
        total += arg;
    }
    console.log(total);
}
funcao(1,2,3,4);

function funcao2(a, b, c){
    console.log(a, b, c);
}
funcao2(1,2,3,4);

//valor padrão
function funcao3(a, b = 2){
    console.log(a + b);
}
funcao3(2);

function funcao4(a, b = 2, c = 4){
    console.log(a + b + c);
}
funcao4(2, undefined, 20);


//Destruturação 
//Obejto
function funcao5({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}
obj = {nome: 'Leonardo', sobrenome: 'Augusto', idade: 31};
funcao5(obj);
//Array
function funcao6([nome, sobrenome, idade]){
    console.log(nome, sobrenome, idade);
}
ary = ['Leonardo','Augusto', 31];
funcao6(ary);


//REST -> usar no lugar de arguments
function conta(operador, acumulador, ...numeros){
    for (let numero of numeros){
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /=numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}
conta('-', 0, 20, 30, 40, 50);

//Arrow Function
const conta2 = (operador, acumulador, ...numeros) => {
    for (let numero of numeros){
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /=numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}
conta2('-', 0, 20, 30, 40, 50);