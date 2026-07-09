/*Adicione um método apresentar()
Na mesma classe Pessoa, adicione um método apresentar() que retorna uma frase como: "Olá, meu nome é Gi e tenho 25 anos"*/

class Pessoa{
    constructor(pnome,pidade){
        this.nome = pnome
        this.idade = pidade
    }

    apresentar(){
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos!`);
        
    }
}

const gi = new Pessoa(`Giovanna`,29)

gi.apresentar()

