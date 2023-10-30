function random(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaUmPouco(msg, tempo){
    return new Promise((resolve,reject) => {
        if (typeof msg !== 'string') reject(new Error('BAD VALUE'));
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}



// Promise.all - Resolve todas a promisses e retorna os valores e se der erro em alguma for rejeitada retorna apenas o erro
/*const promises = [
    'Primeiro valor',
    esperaUmPouco('Promise 1', 3000),
    esperaUmPouco('Promise 2', 500),
    esperaUmPouco('Promise 3', 1000),
    'Outro valor'
];

Promise.all(promises)
    .then(function(valor){
        console.log(valor);
    })
    .catch(function(erro){
        console.log(erro);
    });
*/

//Promise.race - Resolve todas a promisses e retorna o primeiro valores e se der erro em alguma for rejeitada retorna o erro
/*const promises = [
    esperaUmPouco('Promise 1', 3000),
    esperaUmPouco('Promise 2', 500), //primeira a ser resolvida
    esperaUmPouco(111, 1000)
];

Promise.race(promises)
    .then(function(valor){
        console.log(valor);
    })
    .catch(function(erro){
        console.log(erro);
    });
*/

//Promise.resolve - Retorna uma promise já resolvida sem espera
//Promise.reject - Retorna uma promise já resolvida sem espera com erro
function baixaPagina(){
    const emCache = true;

    if (emCache){
        //return Promise.resolve('Página em cache');
        return Promise.reject('Página em cache');
    }else{
        return esperaUmPouco('Baixando página', 3000);
    }
}

baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina);
})
.catch(e => console.log(e));