//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
//Mês começa do 0 (Janeiro)
//const data = new Date('2023-09-06T20:00:00.500');
const data = new Date();
console.log(data.getDate());
console.log(data.getMonth());
console.log(data.getFullYear());
console.log(data.getHours());
console.log(data.getMinutes());
console.log(data.getSeconds());
console.log(data.getMilliseconds());
console.log(data.getDay());

function zeroAEsquerda(num){
    return num >= 10  ? num : `0${num}`;
}
function formataData(data){
   let dia = zeroAEsquerda(data.getDate());
   let mes = zeroAEsquerda(data.getMonth() +1);
   let ano = zeroAEsquerda(data.getFullYear());
   let horas = zeroAEsquerda(data.getHours());
   let min = zeroAEsquerda(data.getMinutes());
   let seg = zeroAEsquerda(data.getSeconds());
   let ms = zeroAEsquerda(data.getMilliseconds());

    return `${dia}/${mes}/${ano} ${horas}:${min}:${seg}`;
}

let dataBrasil = formataData(data);
console.log(dataBrasil);


