const pessoa = {
    nome: 'Leonardo',
    sobrenome: 'De Paula',
    idade: 33,
    endereco: {
        //rua: 'Rua Carlos da Paixão',
        numero: 5
    }
};

//const {nome, sobrenome, ...resto} = pessoa;
//console.log(nome, resto);

const {nome, sobrenome, idade} = pessoa;
console.log(nome, sobrenome, idade);

const {nome: n, sobrenome: sn, idade: i} = pessoa;
console.log(n, sn, i);

const {endereco: {rua = 'valor padrao', numero}, endereco} = pessoa;
console.log(rua, numero, endereco);

