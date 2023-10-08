//reduce -> Reduzir um arrya para um simples elemento
/////////////////////////////////////////////////////
//               0,1,2,3,4...   
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];

const total = numeros.reduce(function(acumulador, valor, indice, array){ 
                                acumulador += valor;
                                return acumulador
                            }, []);

const pares = numeros.reduce(function(acumulador, valor, indice, array){ 
                                if (valor % 2 === 0) acumulador.push(valor);
                                return acumulador
}, []);

//console.log(pares);

const pessoas = [
    { nome : 'Luiz' , idade: 62},
    { nome : 'Maria' , idade: 23},
    { nome : 'Eduardo' , idade: 55},
    { nome : 'Leticia' , idade: 19},
    { nome : 'Rosana' , idade: 32},
    { nome : 'Wallace' , idade: 47},
];

const pessoaMaisVelha = pessoas.reduce(function(acumulador, valor){ 
        console.log(acumulador, valor);
        if (acumulador.idade > valor.idade) return acumulador;
});

console.log(pessoaMaisVelha);