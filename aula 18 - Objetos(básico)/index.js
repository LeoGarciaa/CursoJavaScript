const pessoa1 = {
    nome: 'Leonardo',
    sobrenome: 'Paula',
    idade: 25,

    fala() {
        console.log(`${this.nome}: Hello Word`);
    }
};

pessoa1.fala();
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

/*
function criaPessoa(nome, sobrenome, idade){
    return { nome,sobrenome,idade};
}

const pessoa1 = criaPessoa('Leonardo', 'Paula', 31);
const pessoa2 = criaPessoa('Maria', 'Garcia', 21);
const pessoa3 = criaPessoa('Augusto', 'Neves', 41);

console.log(pessoa2.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa3.idade);
*/