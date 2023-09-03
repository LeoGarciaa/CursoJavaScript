//For in -> lê os índices ou chaves do objeto
//
const frutas = ['Pera', 'Maça', 'Uva'];

const pessoa = {
            nome:'Leonardo',
            sobrenome:'Augusto',
            idade: 32
};

for (let chave in pessoa){
    console.log(pessoa[chave]);
}


for (let i=0; i < frutas.length; i++){
    console.log(frutas[i])
}

for (let index in frutas){
    console.log(frutas[index]);
}