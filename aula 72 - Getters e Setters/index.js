
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', { 
        enumerable: true, 
        configurable: true,
        get: function() {
            return estoquePrivado;
        },
        set: function(valor){
            if (typeof valor !== 'number'){
                throw new TypeError('Bad value');
            }
            estoquePrivado = valor;
        }
    });
}


//const p1 = new Produto('Camiseta', 30, 3);
//p1.estoque = 'Alterando o valor';
//console.log(p1.estoque);

function criaProduto(nome){
    return{
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace('coisa', '');
            nome = valor;
        }
    };
}

const p2 = criaProduto('Camiseta');
p2.nome = 'Qualquer coisa';
console.log(p2.nome );