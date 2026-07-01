/*VOCÊ TEM A STRING "JOÃO SILVA,PEDRO COSTA,MARIA SOUZA". SEPARE OS NOMES, COLOQUE CADA UM COM A PRIMEIRA LETRA MAIÚSCULA E EXIBA UM POR LINHA USANDO FOR...OF*/

let dados = "joão silva,pedro costa,maria souza"

let separados = dados.split(",")


for (const elementos of separados) {
    console.log(elementos.slice(0,1).toUpperCase() + elementos.slice(1).toLowerCase());
   
    
}
