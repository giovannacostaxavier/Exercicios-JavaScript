/*FUNÇÃO QUE RECEBE TRÊS LADOS E USA IF/ELSE PARA DETERMINAR SE FORMAM UM TRIÂNGULO EQUILÁTERO, ISÓSCELES OU
ESCALENO*/

let triangulo = (a,b,c)=>{
    if(a == b && b == c ){
        console.log(`Equilátero`);
        
    }else if(a == b || b == c || a == c){
        console.log(`Isóceles`);
        
    }else{
        console.log(`Escaleno`);
        
    }
}

triangulo(5,5,6)