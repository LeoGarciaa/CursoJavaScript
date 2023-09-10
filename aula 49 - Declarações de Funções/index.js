//Declaração de função (Function hpisting)
function HelloWorld(){
    console.log('Hello World');
}
HelloWorld();

//Firt-class objects (Objetos de primeira clase)
//Function expressio;
const msg = function() {
    console.log('Hello World');
}

function executaMsg(funcao){
    funcao();
}
executaMsg(msg);


//Arrow function
const funcaoArrow = () => {
    console.log('Arrow Function');
}
funcaoArrow();

//Dentro de um objeto
const obj = {
    falar(){
        console.log('Objeto falante');
    }
}
obj.falar();