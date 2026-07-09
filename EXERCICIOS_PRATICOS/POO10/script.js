/*CRIE UMA CLASSE CONTABANCARIA COM A PROPRIEDADE _SALDO. O GET DEVE RETORNAR O SALDO FORMATADO COM "R$". O SET DEVE BARRAR VALORES NEGATIVOS*/

class ContaBancaria{
    constructor(saldo){
        this.saldo = saldo
    }

    get saldo(){
        return `R$ ${this._saldo.toFixed(2)}`
    }

    set saldo(saldo){
        if (saldo < 0) {
            console.log(`Saldo negativo!`);
            return
        }
        this._saldo = saldo
    }
}

const minhaConta = new ContaBancaria(200)
minhaConta.saldo = 250
console.log(minhaConta.saldo);
