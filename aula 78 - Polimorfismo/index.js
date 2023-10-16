//SuperClass
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
};

Conta.prototype.sacar = function(valor){
    if (valor > this.saldo){
        console.log(`Saldo insuficente R$${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    console.log(`Saque realizado com sucesso`);
    this.verSaldo();
};
Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    console.log(`Deposito realizado com sucesso`);
    this.verSaldo();
};
Conta.prototype.verSaldo = function(){
    console.log(`Ag/c: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`)
};

//
function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this,agencia, conta, saldo);
    this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor){
    if (valor > (this.saldo + this.limite)){
        console.log(`Saldo insuficente R$${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    console.log(`Saque realizado com sucesso`);
    this.verSaldo();
};

function ContaPoupanca(agencia, conta, saldo){
    Conta.call(this,agencia, conta, saldo);
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;


//const conta1 = new Conta(11,22,10);
//conta1.verSaldo();
//conta1.depositar(100);
//conta1.sacar(20);

const CC = new ContaCorrente(11,22,0, 1000);
CC.sacar(1000);

const CP = new ContaPoupanca(11,22,0);
CP.sacar(1000);