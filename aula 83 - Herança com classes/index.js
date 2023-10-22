class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }
    
    ligar() {
        if(this.ligado){
            console.log(`${this.nome} já está ligado.`);
            return;
        }

        this.ligado = true;
        console.log(`${this.nome} foi ligado.`);
    }

    desligar() { 
        if(!this.ligado) {
            console.log(`${this.nome} já está desligado.`);
            return;
        }
        this.ligado = false;
        console.log(`${this.nome} foi desligado.`);
    }
  
}

class Smartphone extends DispositivoEletronico {
    constructor(nome,cor,modelo) {
        super(nome); //Chama o constructor da classe pai
        this.cor = cor;
        this.modelo = modelo;
    }
}


class Tablet extends DispositivoEletronico {
    constructor(nome,temWifi) {
        super(nome); //Chama o constructor da classe pai
        this.temWifi = temWifi;
    }

    //reescreve o método da classe pai
    ligar() {
        if(this.ligado){
            if (this.temWifi){
                console.log(`${this.nome} já está ligado. Wifi está conectado`);
                return;
            }
            console.log(`${this.nome} já está ligado.`);
            return;
        }

        this.ligado = true;

        if (this.temWifi){
            console.log(`${this.nome} foi ligado. conectar na rede Wifi`);
            return;
        }

        console.log(`${this.nome} foi ligado.`);
    }
    
    //metodo próprio
    falaOi(){
        console.log(`${this.nome} fala Oi.`);
    }
}

const s1 = new Smartphone('Iphone', 'Preto', '14 X');
s1.ligar();
s1.desligar();
console.log(s1);

const t1 = new Tablet('Ipad', true);
t1.ligar();
t1.desligar();
console.log(t1);
t1.falaOi();
