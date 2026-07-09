class Animal{
    constructor(pnome,ptipo){
        this.nome=pnome
        if(ptipo == 1){
            this.tipo = `Doméstico`
            this.habitat = `Casa`
        }else if(ptipo == 2){
            this.tipo = `Selvagem`
            this.habitat = `Floresta`
        }
    }
}
let a1= new Animal(`Gato`,1)
let a2= new Animal(`Leão`,2)

console.log(a1.nome,a1.tipo,a1.habitat);
console.log(a2.nome,a2.tipo,a2.habitat);
