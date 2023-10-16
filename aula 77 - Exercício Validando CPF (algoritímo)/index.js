// Valida se CPF é válido
// CPF : 705.484.450-52

/*
_________________________________________________________________________
Multiplicar os números do cpf e somar o resultado
7  0  5  4  8  4  4  5  0    
x  x  x  x  x  x  x  x  x   
10 9  8  7  6  5  4  3  2
____________________________
70 0  40 28 48 20 16 15 0  = 237

Buscar o primeriro digito e validar e se for maior que 9 , atribuir 0
11 - (237 % 11) = > 5 <
_________________________________________________________________________
Reafazer para buscar o proximo, aumentando a seq para 11

Multiplicar os números do cpf e somar o resultado
7  0  5  4  8  4  4  5  0  5   
x  x  x  x  x  x  x  x  x  x 
11 10 9  8  7  6  5  4  3  2
____________________________
77 0  45 32 56 24 20 20 0  10 = 284

Buscar o primeriro digito e validar e se for maior que 9 , atribuir 0
11 - (284 % 11) = > 2 <
_________________________________________________________________________

Comparar CPF gerado no algoritumo com CPF de entrada
705.484.450-52 === CPF GERADO

*/

function ValidaCPF(cpf){

    Object.defineProperty(this, 'cpfLimpo', {
        get: function() {
            return  cpf.replace(/\D+/g, ''); //retirar qualuqer valor que não seja número
        }
    });
}

ValidaCPF.prototype.valida = function (){
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSquencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0,-2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);
    
    const novoCpf = cpfParcial + digito1 + digito2
    return novoCpf === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function (cpfParcial){
    const cpfArray = Array.from(cpfParcial); //transforma cpf em array
    let regressivo = cpfArray.length +1;
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo --;
        return ac;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? 0 : String(digito);
};

ValidaCPF.prototype.isSquencia = function(){
    return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;
};

const cpf = new ValidaCPF('705.484.450-52');
//const cpf = new ValidaCPF('111.111.111-11');
//cpf.valida;

console.log(cpf.valida());