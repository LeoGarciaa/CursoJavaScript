/*
&& -> false && true -> retorna o valor false
|| -> true && false -> retorna o valor verdadeiro

Valores false
false
0
'' "" ``
null / undefined
NaN
*/

function falaOi() {
    return 'Oi';
}

let vaiExecutar = false;

console.log(vaiExecutar && falaOi());


console.log(0 || false || null || 'Leonardo' || true); //retorna o primeiro valor verdadeiro

let corUsuario = 'azul';
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);




