// indices      0           1       2        3
const nomes = ['Leonardo', 'João', 'Maria', 'Lais'];
nomes[4] = 'Luiza';

console.log(nomes[0]);

console.log(nomes, nomes.length); //busca o tamanho do array
nomes[nomes.length] = 'José';

console.log(nomes);

nomes.push('Leandro'); //adiciona valor no fim do array
console.log(nomes);

nomes.unshift('Fabio');//adiciona valor no inicio do array
console.log(nomes);

let nomeRemovido = nomes.pop(); //retira ultimo valor do array
console.log(nomeRemovido);

nomeRemovido = nomes.shift(); //retira primeiro valor do array
console.log(nomeRemovido);

console.log(nomes);

delete nomes[4] //apaga o valor do indice (indice fica sem valor)
console.log(nomes);

console.log(nomes.slice(0,2)); //limita o retorno dos indices do array

console.log(nomes instanceof Array); // verifica se é array