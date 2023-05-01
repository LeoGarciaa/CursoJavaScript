const nome = 'Leonardo Augusto';
const sobreNome = 'Garcia';
const idade = 32;
const peso = 75;
const altura = 1.77;
let indiceMassaCoporal; 
let anoNascimento;

indiceMassaCoporal = peso / (altura * altura);
anoNascimento = 2023 - idade;

console.log(`${nome} ${sobreNome} tem ${idade} , pesa ${peso} kg`);
console.log(`tem ${altura} de altura e sem IMC é de ${indiceMassaCoporal}`);
console.log(`${nome} nasceu em ${anoNascimento}`); //Concatenar

