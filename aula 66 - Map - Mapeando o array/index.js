//map -> Sempre retorna um array com tamanho igual ao orignal
/////////////////////////////////////////////////////
//               0,1,2,3,4...   
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
const numerosEmDobro = numeros.map(valor => valor * 2 );

//console.log(numerosEmDobro);


const pessoas = [
    { nome : 'Luiz' , idade: 62},
    { nome : 'Maria' , idade: 23},
    { nome : 'Eduardo' , idade: 55},
    { nome : 'Leticia' , idade: 19},
    { nome : 'Rosana' , idade: 32},
    { nome : 'Wallace' , idade: 47},
];

const nome = pessoas.map(obj => obj.nome);
console.log(nome);

const idade = pessoas.map(obj => ({idade: obj.idade}));
console.log(idade);

const comIds = pessoas.map(function(obj, indice){
                            const newObj = { ...obj };
                            newObj.id = indice +1;
                            return newObj; 
});

console.log(comIds);


