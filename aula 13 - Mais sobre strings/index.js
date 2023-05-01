//índices        012345678   
let umaString = `Um \texto`; //Vira um espaçamento, pra exibir barra invertida, usar dua \\

//Índices
console.log(umaString[4]); //Busca o valor de um indice da string

console.log(umaString.indexOf('o')); //retorna o indice que começa
console.log(umaString.indexOf('o', '3')) //Altera o inicio da busca para indice 3
console.log(umaString.lastIndexOf('o')) //Altera do final para o começo

console.log(umaString.charAt(6)); //Busca o valor de um indice da string

//Concatenar
console.log(umaString.concat(' para teste.'));
console.log(umaString + ' para teste');
console.log(`${umaString} para teste`);

//Expressões regulares
console.log(umaString.match(/[a-z]/)); //Retorna o indice da busca
console.log(umaString.search(/[a-z]/)); //Retorna o caracter da  busca
console.log(umaString.search(/x/)); //Retorna o caracter da  busca
console.log(umaString.replace(/Um/, 'Outra')); //Altera o texto

//Retornar pedaços do texto
let outraString = 'O rato roeu a roupa do rei de roma.';
console.log(outraString.slice(-5)); //retorna um trecho do texto, valores negativos buscam a partir do fim
console.log(outraString.substring(outraString.length -5)); //retorna um trecho do texto, passando o indice

console.log(outraString.length); //retorna o tamanho da string

//Quebrar texto em array
console.log(outraString.split(' ')); //vai separar o texto sempre que tirar um espaço

//Altera caixa do texto
console.log(outraString.toUpperCase()); //Maiúsculo
console.log(outraString.toLowerCase()); //Minúsculo


