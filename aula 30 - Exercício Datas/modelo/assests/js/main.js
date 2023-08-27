const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full'});


/*dataFormatada = formataData(data);
setResultado(dataFormatada);



function setResultado(dataFormatada){
    const h1 = document.querySelector('.container h1');
    h1.innerHTML = dataFormatada;
    h1;
}


function formataData(data){
    let dia = data.getDate();
    let diaTexto = getDiaDaSemanaTexto(data.getDay());
    let mesTexto = getMesTexto(data.getMonth());
    let ano = data.getFullYear();
    let horas = zeroAEsquerda(data.getHours());
    let min = zeroAEsquerda(data.getMinutes());
 
     return `${diaTexto}, ${dia} de ${mesTexto}  de ${ano} ${horas}:${min}`;
 }


function getMesTexto(mes){
    let mesTexto;

    switch (mes){
    case  0:
        mesTexto = 'Janeiro';
        return mesTexto;
    case 1:
        mesTexto = 'Fevereiro';
        return mesTexto;
    case 2:
        mesTexto = 'Março';
        return mesTexto;
    case 3:
        mesTexto = 'Abril';
        return mesTexto;
    case 4:
        mesTexto = 'Maio';
        return mesTexto;
    case 5:
        mesTexto = 'Junho';
        return mesTexto;
    case 6:
        mesTexto = 'Julho';
        return mesTexto;
    case 7:
        mesTexto = 'Agosto';
        return mesTexto;
    case 8:
        mesTexto = 'Setembro';
        return mesTexto;
    case 9:
        mesTexto = 'Outubro';
        return mesTexto;
    case 10:
        mesTexto = 'Novembro';
        return mesTexto;
    case 11:
        mesTexto = 'Dezembro';
        return mesTexto;
    default:
        mesTexto = '';
        return mesTexto;
    }
}

function getDiaDaSemanaTexto(diaDaSemana){
    let diaDaSemanaTexto;

    switch (diaDaSemana){
    case  0:
        diaDaSemanaTexto = 'Domingo';
        return diaDaSemanaTexto;
    case 1:
        diaDaSemanaTexto = 'Segunda-Feira';
        return diaDaSemanaTexto;
    case 2:
        diaDaSemanaTexto = 'Terça-Feira';
        return diaDaSemanaTexto;
    case 3:
        diaDaSemanaTexto = 'Quarta-Feira';
        return diaDaSemanaTexto;
    case 4:
        diaDaSemanaTexto = 'Quinta-Feira';
        return diaDaSemanaTexto;
    case 5:
        diaDaSemanaTexto = 'Sexta-Feira';
        return diaDaSemanaTexto;
    case 6:
        diaDaSemanaTexto = 'Sabádo-Feira';
        return diaDaSemanaTexto;
    default:
        diaDaSemanaTexto = '';
        return diaDaSemanaTexto;
    }
}

function zeroAEsquerda(num){
    return num >= 10  ? num : `0${num}`;
}*/