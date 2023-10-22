//Não é recomentado criar função externas 
function novoControle(){
    console.log('Novo controle');
}

class ControleRemoto {
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
        novoControle();
    }

    // Método de estância
    aumetarVolume(){
        this.volume += 2;
    }
    
    diminuirVolume(){
        this.volume -= 2;
    }

    // Método estático
    // Não tem acesso aos dados da instância (this.volume)
    static trocaPilha(){
       console.log('Troca pilha de controles');
    }
}

const c1 = new ControleRemoto('LG');
c1.aumetarVolume();
c1.aumetarVolume();
c1.aumetarVolume();
console.log(c1);

ControleRemoto.trocaPilha();

const c2 = new ControleRemoto('Samsung');
console.log(c2);
