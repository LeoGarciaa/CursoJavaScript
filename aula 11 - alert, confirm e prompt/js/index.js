// Objeto window
//Só funciona no navegador
//window.alert(`New Message`); 
//alert(`New Message`); //retorna tipo undifinied
//confirm(`Para seguir click em ok`); //retorna boolean true/false
//prompt(`Digiter alguma coisa`); //retorna uma string

let confirma = confirm(`Realmente deseja seguir?`);
alert(confirma);

let num1 = prompt('Digite um número');
alert(num1);
let num2 = prompt('Digite ourtro numero');
alert(num2);


alert(`Aqui vai concatenar`);
alert(num1 + num2);

num1 = parseFloat(num1);
num2 = parseFloat(num2);

alert(`Aqui vai somar`)
alert(num1 + num2);


