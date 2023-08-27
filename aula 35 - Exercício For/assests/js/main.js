const elementos  = [
                    {tag: 'p', frase: 'Texto 1'},
                    {tag: 'div', frase: 'Texto 2'},
                    {tag: 'footer', frase: 'Texto 3'},
                    {tag: 'section', frase: 'Texto 4'},
                ];
const container = document.querySelector('.container');
const div = document.createElement('div');

for (i = 0; i < elementos.length; i++){
    let { tag, frase } = elementos[i];
    let tagHtml =  criTag(tag);
    let texto = document.createTextNode(frase)
    
    div.appendChild(texto);
    div.appendChild(tagHtml);
}
container.appendChild(div);

function criTag(t){
    let tagHtml = document.createElement(t);
    return tagHtml;
}