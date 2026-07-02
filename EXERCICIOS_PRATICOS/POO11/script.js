/*CRIE UMA CLASSE ANIMAL COM AS PROPRIEDADES _NOME E _IDADE NO CONSTRUCTOR, E UM MÉTODO APRESENTAR() QUE PRINTA UMA FRASE COM OS DOIS. DEPOIS CRIE UMA CLASSE CACHORRO QUE HERDA DE ANIMAL E ADICIONA A PROPRIEDADE _RACA, E UM MÉTODO LATIR() QUE PRINTA "AU AU!".*/

class Animal{
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }

    Apresentar(){
        console.log(`Olá! meu nome é ${this.nome} e eu tenho ${this.idade} anos!`);

    }
}

class Cachorro extends Animal{
    constructor(nome,idade,raca){
        super(nome,idade)
        this.raca = raca
    }

    Latir(){
        console.log(`AU AU!`);
    }
}

const a1 = new Animal(`Thor`,10)
const c1 = new Cachorro(`Mag`,5,`Spitz`)

c1.Latir()
c1.Apresentar()
a1.Apresentar()
