/*Crie uma classe Forma com um método desenhar() que imprime "Desenhando uma forma genérica.". Crie uma classe Quadrado que herda de Forma e sobrescreve desenhar() pra imprimir "Desenhando um quadrado.*/

class Forma{
    
    desenhar(){
        console.log(`Desenhando uma forma geométrica`);
    }
}

class Quadrado extends Forma{
    desenhar(){
        console.log(`Desenhando uma quadrado`);
    }
}

const f1 = new Forma()
const f2 = new Quadrado()

f1.desenhar()
f2.desenhar()