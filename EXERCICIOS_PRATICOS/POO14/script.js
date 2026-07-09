class Temperatura{
    constructor(celsius){
        this.celsius = celsius
    }

    get fahrenheit(){
        return celsius * 9/5 + 32
    }

    set celsius(temp){
        if (temp > 100) {
            console.log(`Temperatura muito alta`);
            return
        }
        this._celsius=temp
    }
}

const calor = new Temperatura(25)
calor.celsius = 120
console.log(calor.fahrenheit);
