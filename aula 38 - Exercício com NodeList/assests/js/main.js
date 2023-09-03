const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroudColorBody = estilosBody.backgroundColor;

for (let paragrafo of ps){
    paragrafo.style.backgroundColor = backgroudColorBody;
    paragrafo.style.color = '#FFFFFF';
}