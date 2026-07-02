/*Escreve uma função async chamada buscarPokemon que:

Recebe o nome de um pokémon como parâmetro (ex: "pikachu")
Faz o fetch pra URL https://pokeapi.co/api/v2/pokemon/${nome}
Usa await pra esperar a resposta
Checa se resposta.ok — se não for, lança um erro com throw new Error(...)
Usa await de novo pra converter com .json()
No final, faz um console.log mostrando só o nome e a altura do pokémon (dica: no JSON tem os campos name e height)
Usa try/catch pra pegar qualquer erro*/

const buscarPokemon = async (nome)=>{
    try {
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
        if (!resposta.ok) {
            throw new Error(`A resposta falhou`);
        }
        const dados = await resposta.json()
        console.log(dados.name,dados.height);

    } catch (error) {
        console.log(`Falha: ${error.message}`);
        
    }
}

buscarPokemon(`pikachu`)