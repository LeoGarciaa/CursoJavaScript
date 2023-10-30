/*function random(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaUmPouco(msg, tempo, cb){
    setTimeout(() => {
        console.log(msg);
        if(cb) cb();
    }, tempo);
}


esperaUmPouco('Frase 1', random(1,3), function(){
    esperaUmPouco('Frase 2', random(1,3), function(){
        esperaUmPouco('Frase 3', random(1,3));
    })
});
*/


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

esperaUmPouco('Conexão com Base de dados', random(1,3))
    .then(resposta => {
        console.log(resposta);
        return esperaUmPouco('Buscando dados', random(1,3));
    })
    .then(resposta =>{
        console.log(resposta);
        return esperaUmPouco(1111, random(1,3));
    }).then(resposta =>{
        console.log(resposta);
        return esperaUmPouco('Retornando dados', random(1,3));
    }).then(resposta =>{
        console.log(resposta);
    })
    .catch(e => {
        console.log('ERRO', e);
    });


