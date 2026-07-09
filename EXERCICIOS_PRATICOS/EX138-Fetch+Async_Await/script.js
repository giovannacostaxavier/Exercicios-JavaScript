/*Exercício: buscar uma piada aleatória
API: https://official-joke-api.appspot.com/random_joke
Testa a URL no navegador primeiro pra ver o formato do JSON.
O que fazer
Cria uma função async chamada buscarPiada que busca uma piada aleatória nessa API e mostra no console a pergunta (setup) e a resposta (punchline).
Repara que essa API não recebe parâmetro nenhum — é sempre a mesma URL, ela sempre devolve uma piada diferente sozinha. Então pensa: sua função precisa de parâmetro dessa vez, ou não?*/



const buscarPiada = async ()=>{
    try {
        const resposta = await fetch(`https://official-joke-api.appspot.com/random_joke`);
        console.log(resposta);
        if (!resposta.ok) {
            throw new Error(`A resposta falhou`);
        }
        const dados = await resposta.json()
        console.log(dados.setup, dados.punchline);
    } catch (erro) {
        console.log(`Deu ruim! ${erro.message}`);
    }
}

buscarPiada()