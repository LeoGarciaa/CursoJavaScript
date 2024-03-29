const inputTarefa = document.querySelector('.input-nova-tarefa');
const btnTarefa = document.querySelector('.btn-add-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi(){
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        criaTarefa(inputTarefa.value);
        limpaInput();
    }
});

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApaga(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    li.appendChild(botaoApagar);

}
function criaTarefa(textoInput){
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApaga(li);
    salvarTarefas();
}

btnTarefa.addEventListener('click', function(){
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
    limpaInput();
});

document.addEventListener('click', function(e){
    const el = e.target;

    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefas();
    }   
});

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaTarefas = [];

    for( let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaTarefas.push(tarefaTexto);
    }

    const tarefaJSON = JSON.stringify(listaTarefas);
    localStorage.setItem('tarefas', tarefaJSON);

}

function adicionaTarefaSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}

adicionaTarefaSalvas();