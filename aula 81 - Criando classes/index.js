class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    //classe já envia métodos para o prototype
    falar(){
        console.log(`${this.nome} está falando`);
    }
}

const p1 = new Pessoa('Leo','Garcia');

console.log(p1);
p1.falar();