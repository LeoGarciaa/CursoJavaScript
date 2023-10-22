class ValidaCPF {
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    isSquencia(){
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }

    geraNovoCpf(){
        const cpfSemDigitos = this.cpfLimpo.slice(0,-2);
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
        this.novoCpf = cpfSemDigitos + digito1 + digito2
    }

    //Para verificar se método pode ser estatico basta verificar se não existe this. dentro dele
    static geraDigito(cpfSemDigitos){
        let total = 0;
        let reverso = cpfSemDigitos.length +1;
        
        for (let sringNumerica of cpfSemDigitos){
            total += reverso * Number(sringNumerica) ;
            reverso --;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    valida() {
        if (typeof this.cpfLimpo === 'undefined') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.isSquencia()) return false;
        this.geraNovoCpf();
        
        return this.novoCpf === this.cpfLimpo;
    }
}

const cpf = new ValidaCPF('070.987.720-03');
if (cpf.valida()){
    console.log(`Cpf é valido!`);
}else{
    console.log(`Cpf não é valido!`);
}
