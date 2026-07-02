class Carro {
    constructor(pnome,ptipo){
        this.nome=pnome
        if(ptipo == 1){
            this.tipo=`Utilitario`
            this.velmax= 100
        }else if(ptipo == 2){
            this.tipo=`SUV`
            this.velmax= 150
        }else if (ptipo == 3){
            this.tipo=`Militar`
            this.velmax= 250
        }
    }
}

let c1 = new Carro(`Corola`,1)
let c2 = new Carro(`F250`,2)
let c3 = new Carro(`MI350`,3)

console.log(c1.nome,c1.tipo, c1.velmax);
