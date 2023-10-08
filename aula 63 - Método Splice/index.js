//                -5      -4     -3      -2      -1                                                      
//                 0       1      2       3       4
const nomes = ['Leonardo','José','Maria','Joana','João'];

//nomes.splica(índice, delete, elem1, elem2, elem3);
//pop
//const removidos = nomes.splice(-1, 1);

//shift
//const removidos = nomes.splice(0,1);

//console.log(nomes,removidos);

//push
//nomes.splice(nomes.length,0,'Luiz','Augusto','Paula');

// Unshift
nomes.splice( 2, 0, 'Gabriel', 'Mané');


console.log(nomes);