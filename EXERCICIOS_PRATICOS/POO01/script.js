/*class Pessoa{
    constructor(){
        this.nome=`Bruna`
    }
}

let p1 = new Pessoa()

console.log(p1.nome);*/

class Pessoa {
    constructor(pnome,pidade){
        this.nome=pnome
        this.idade=pidade
    }
}
let p1= new Pessoa(`Giovanna`,29)
console.log(p1.nome);
console.log(p1.idade);

