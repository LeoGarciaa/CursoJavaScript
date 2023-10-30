function random(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaUmPouco(msg, tempo){
    return new Promise((resolve,reject) => {
        if (typeof msg !== 'string') {
            reject(new Error('BAD VALUE'));
            return;
        }
        setTimeout(() => {
            resolve(msg);
            return;
        }, tempo);
    });
}

// esperaUmPouco('Fase 1', random(0.3))
//     .then(valor => {
//         console.log(valor);
//         return esperaUmPouco('Fase 2', random(0.3))
//     })
//     .then(valor => {
//         console.log(valor);
//         return esperaUmPouco('Fase 3', random(0.3))
//     })
//     .then(valor => {
//         console.log(valor);
//     })
//     .catch(e => console.log(e));

async function executa() {
    try {
        //const fase1 = await esperaUmPouco('Fase 1', random(0.3));
        const fase1 =  esperaUmPouco('Fase 1', random(0.3)); //Pending
        console.log(fase1);
        const fase2 = await esperaUmPouco(1111, random(0.3));
        console.log(fase2);
        const fase3 = await esperaUmPouco('Fase 3', random(0.3));
        console.log(fase3);
    }catch (e){
        console.log(e);
    }
}

executa();

/*
Estado Promise
Pending -> pendente
fullFilled -> resolvida
reject -> rejeitada
*/