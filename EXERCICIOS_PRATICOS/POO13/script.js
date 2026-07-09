class Termometro{
    constructor(temperatura){
        this.temperatura = temperatura
    }

    set temperatura(temp){
        if (temp > 100) {
            console.log(`Temperatura muito alta`);
            return
        }
        this._temperatura=temp
    }

    get temperatura(){
        return `Temperatura atual : ${this._temperatura}°`

    }
}

const calor = new Termometro(25)
calor.temperatura = 120
console.log(calor.temperatura);
