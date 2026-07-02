/*Classe Senha com validação de tamanho
Crie uma classe Senha com _valor. O set valor deve impedir senhas com menos de 6 caracteres (mostrando uma mensagem de erro). O get valor deve retornar a senha "escondida", tipo "******" (asteriscos do tamanho da senha).*/

class Senha {
    constructor(valor){
        this.valor = valor
    }

    set valor(val){
        if (val.length < 6) {
            console.log(`Sua senha precisa ter 6 ou mais caracteres`);
            return
        }
        this._valor = val
    }

    get valor(){
        return `*`.repeat(this._valor.length)
    }
}
const novaSenha = new Senha(`123456`)
novaSenha.valor = `154`
console.log(novaSenha.valor);
