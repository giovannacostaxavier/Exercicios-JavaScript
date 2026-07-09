/*Crie uma classe Pessoa
A classe deve ter um construtor que recebe nome e idade e guarda nos atributos. Depois crie um objeto chamado gi com seu nome e idade.*/

class Pessoa{
    constructor(pnome,pidade){
        this.nome = pnome
        this.idade = pidade
    }
}

const gi = new Pessoa(`Giovanna`,29)

console.log(gi.nome,gi.idade);
