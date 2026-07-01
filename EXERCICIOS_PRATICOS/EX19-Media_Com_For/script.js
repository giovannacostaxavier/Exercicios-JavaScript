//MEDIA DE 10 NÚMEROS COM FOR

const prompt = require('prompt-sync')();
let media=0
for(let i=1;i<=10;i++){
    let numeros=parseInt(prompt(`Digite o ${i}º número: `))
    media+=numeros/10
}
console.log(media);
