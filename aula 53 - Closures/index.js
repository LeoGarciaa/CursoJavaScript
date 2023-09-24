//Closures são os valores do retorno da função
function retornaFuncao(){
    const nome = 'Leonardo';
    return function(){
        return nome;
    };
}

const funcao = retornaFuncao();
console.dir(funcao); //info do objeto no navagador incluindo Closures