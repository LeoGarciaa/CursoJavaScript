//Composição
const falar =  {
    falar(){
    console.log('Hello World');
    },
}

const pessoProtoype = {...falar};
//const pessoProtoype = {...falar, comer, beber};
//const pessoProtoype = Object.assign({}, falar);

function  criaPessoa(nome, sobrenome){
    return Object.create(pessoProtoype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}

const p1 = criaPessoa('Leo','Garcia');
console.log(p1.nome, p1.sobrenome);
p1.falar();