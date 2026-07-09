/*Exercício: buscar informações de um país
API: https://restcountries.com/v3.1/name/{nomeDoPais}
Exemplo: https://restcountries.com/v3.1/name/portugal — testa essa URL no navegador primeiro pra ver o formato do JSON que volta (repara que vem dentro de um array [ ], isso é diferente do Pokémon que veio direto como objeto { }).
O que fazer
Escreve uma função async chamada buscarPais que:

Recebe o nome de um país como parâmetro
Faz o fetch na URL montada com esse nome
Usa await + checa .ok, lançando erro se não for válido
Usa await de novo pra converter com .json()
Mostra no console.log o nome comum do país e a capital*/

const buscarPais = async (codigoDoPais)=>{
    try {
        const resposta = await fetch(`https://countries.dev/alpha/${codigoDoPais}`);
        console.log(resposta);
        if (!resposta.ok) {
            console.log(`Status: ${resposta.status}`);
            throw new Error(`A resposta falhou`);
        }
        const dados = await resposta.json()
        console.log(dados.name,dados.capital,dados.region);


        
    } catch (erro) {
        console.log(`Deu erro ${erro.message}`);
    }
}
buscarPais(`XX`)