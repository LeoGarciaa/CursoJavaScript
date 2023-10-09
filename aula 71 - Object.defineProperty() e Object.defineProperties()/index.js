//defineProperty() / defineProperties

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', { 
        enumerable: false, //mostra a chave
        value: estoque, //valor
        writable: true, //editavél valor
        configurable: false // configuravel
    });

    Object.defineProperty(this,{ 
        nome: {
            enumerable: true, //mostra a chave
            value: nome, //valor
            writable: true, //editavél valor
            configurable: true // configuravel
        }
    });

    Object.defineProperty(this,{ 
        preco: {
            enumerable: true, //mostra a chave
            value: preco, //valor
            writable: true, //editavél valor
            configurable: false // configuravel
        }
    });

}

const p1 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(p1));