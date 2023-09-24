//ESCOPO LÉXICO
//EsCOPO MAIS INTERNO PODE ACESSAR O EXTERNO, PEGANDO OBJETOS E VALORES ACIMA
const nome = 'Leonardo';
function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    //const nome = 'Augusto';
    falaNome();
}

usaFalaNome();