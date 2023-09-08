const numeros = [1,2,3,4,5,6,7,8,9];

for (let numero of numeros){

    if (numero === 2){
        console.log (`Pulei o número ${numero}`);
        continue; //pula pra prox interação do loop
    }if (numero === 7) {
        console.log (`Parei no número ${numero}`);
        break; //para o loop
    }

    console.log(numero);
}