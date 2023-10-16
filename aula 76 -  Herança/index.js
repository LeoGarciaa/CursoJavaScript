
//Produto
// Camiseta, caneca

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;

}

Produto.prototype.aumento = function(valor) {
    this.preco += valor;
};
Produto.prototype.desconto = function(valor) {
    this.preco += valor;
};


function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor =  Camiseta;

Camiseta.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual/100));
}

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if (typeof valor != 'number') return;
            estoque = valor;
        }
    });


}

Caneca.prototype = Object.create(Produto.prototype); //linka objetos
Caneca.prototype.constructor =  Caneca; //altera construtor de Produto para Caneca

const produto = new Produto('Generico', 0 );
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const caneca = new Caneca('Caneca', 5.5, 'Porcelana', 5 );
caneca.estoque = 100;

camiseta.aumento(10);
caneca.aumento(10);

console.log(produto);
console.log(camiseta);
console.log(caneca, caneca.estoque);