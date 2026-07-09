/*CRIE UMA CLASSE CARRO COM A PROPRIEDADE _VELOCIDADE. O GET DEVE RETORNAR A VELOCIDADE FORMATADA COM UMA FRASE. O SET DEVE BARRAR VALORES NEGATIVOS OU ACIMA DE 300*/


class Carro{
    constructor(vel){
        this.velocidade = vel
    }

    get velocidade(){
        return `A sua velocidade é de ${this._velocidade} KM/h !`
    }

    set velocidade(vel){
        if (vel < 0 || vel > 300) {
            console.log(`Velocidade inválida! `);
            return
        }
        this._velocidade = vel
        
    }

}

const minhaVel = new Carro(100)
console.log(minhaVel.velocidade);
minhaVel.velocidade = 120
