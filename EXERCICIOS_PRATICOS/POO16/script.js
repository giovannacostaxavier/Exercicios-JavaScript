/*Classe ContaBancaria com saldo protegido
Crie uma classe ContaBancaria com _saldo. O set saldo deve impedir que o saldo fique negativo. O get saldo deve retornar o valor formatado, tipo "Saldo: R$ 500.00".*/ 


class ContaBancaria{
    constructor(saldo){
        this.saldo = saldo
    }
    
    get saldo(){
        return `Saldo: R$ ${this._saldo.toFixed(2)}`
    }

    set saldo(valor){
        if (valor < 0) {
            console.log(`Saldo negativo!`);
            return
        }
        this._saldo = valor
    }
}

const saldoConta = new ContaBancaria(250)
saldoConta.saldo = -1
console.log(saldoConta.saldo);