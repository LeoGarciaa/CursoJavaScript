//               0,1,2,3,4...   
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];


//Soma do dobro te dos os pares
const pares = numeros
                    .filter(valor => valor % 2 === 0)
                    .map(valor => valor *2)
                    .reduce((ac,valor) => ac + valor);


console.log(pares);