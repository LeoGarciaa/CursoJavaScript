//Function Factory
//Construtor Function
function criaPessoa(nome, sobrenome, altura,  peso){
    return {
        nome,
        sobrenome,
        //Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        //Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}` ;
        },
        fala(assunto){
                return `${this.nome} : ${assunto}`;
        },
        altura,
        peso,
        //Getter
        get imc(){
            const indice = this.peso / (this.altura **2);
            return indice.toFixed(2);
        }

    };

}

const p1 = criaPessoa('Leo', 'Augusto', 1.78, 75);
console.log(p1.fala('Meu IMC é'), p1.imc);
p1.nomeCompleto = 'Leonardo Augusto Garcia';
console.log(p1.fala('Meu Nome completo é'), p1.nomeCompleto);
