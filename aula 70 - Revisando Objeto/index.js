//Objeto Literal - {}
///////////////////////////////////
const pessoa = {
    nome: 'Luiz', 
    sobrenome: 'Otavio'
};

const chave = 'nome';
console.log(pessoa[chave]);
console.log(pessoa.sobrenome);
///////////////////////////////////


//Objeto Construtor - new Object();
///////////////////////////////////
const pessoa1 = new Object();
pessoa1.nome = 'Leonardo';
pessoa1.sobrenome = 'Augusto';
pessoa1.idade = 2;
pessoa1.falarNome = function(){
                                console.log(`Meu nome é ${this.nome}`)
                            };
 pessoa1.getDataNascimento = function(){
                                        const dataAtual = new Date();
                                        return dataAtual.getFullYear() - this.idade;
                                        };

console.log(pessoa1[chave]);
console.log(pessoa1.sobrenome);
pessoa1.falarNome();
console.log(pessoa1.getDataNascimento());

for (let chave in pessoa1){
    console.log(pessoa1[chave]);
}
///////////////////////////////////