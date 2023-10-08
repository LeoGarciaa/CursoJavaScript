//Função fabrica -> retorna um objeto
//Construtora -> Pessoa(new) // Inicia com letra maiucula e cria novo objeto com new
function Pessoa(nome, sobrenome){
    //Atrributos ou metodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome

    //método - funções dentro da classe
    this.fala = function (){
        console.log(this.nome + ': Hello World')
    }

    //método e atributos privado, não pode ser chamado fora do escopo da classe
    ID = 123
    const metodoInterno = function(){};
}
const p1 = new Pessoa('Leonardo', 'Augusto')
console.log(p1.nome);



