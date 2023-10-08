//Filter -> Sempre retorna um array menor que orignal
/////////////////////////////////////////////////////
//Retorna os números maiores que 10
//               0,1,2,3,4...   
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];

//function callbackFilter(valor, indice, array){
//    return valor > 10;
//}

//const numerosFiltrados = numeros.filter(callbackFilter);

const numerosFiltrados = numeros.filter(valor =>  valor > 10 );

//console.log(numerosFiltrados);

const pessoas = [
    { nome : 'Luiz' , idade: 62},
    { nome : 'Maria' , idade: 23},
    { nome : 'Eduardo' , idade: 55},
    { nome : 'Leticia' , idade: 19},
    { nome : 'Rosana' , idade: 32},
    { nome : 'Wallace' , idade: 47},
];

const nomesGrandes = pessoas.filter(obj => obj.nome.length >= 7 );
const pessoasIdosas = pessoas.filter(obj => obj.idade >= 50 );
const nomesFinalcomA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a') );

console.log(nomesGrandes);
console.log(pessoasIdosas);
console.log(nomesFinalcomA);
