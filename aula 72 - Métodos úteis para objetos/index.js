/*
Object.values
Object.entries
Object.getOwnPropertyDescriptor(o, 'prop')
Object.assign(des, any) (Copia objeto para novo)
... (spread) (espalha o objeto para outro objeto)
Object.keys (retorna as chaves)
Obejct.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

const produto = {nome: 'Caneca', preco: 1.98 };
//const outraCoisa = produto;
const outraProduto = {...produto, material: 'Plastico'};
const caneca = Object.assign({}, produto, {material: 'porcelana'});
const copo = {nome: 'copo', preco: produto.preco}; 


outraProduto.nome = 'Caneta';
outraProduto.preco = 0.75;

console.log(produto, outraProduto, caneca, copo);