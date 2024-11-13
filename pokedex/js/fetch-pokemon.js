// Função assíncrona para buscar e exibir Pokémons de uma geração específica.
async function BuscarPokemon(generation) {
    const container = document.getElementById(`gen${generation}`);
    container.innerHTML = ''; 

    const inicia = generation === 1 ? 1 : geracaoLimite[generation - 1] + 1;
    const termina = geracaoLimite[generation];

    const promessas = [];

    const pokemons = new Array(termina - inicia + 1);

    for (let i = inicia; i <= termina; i++) {
        const index = i - inicia;  

        const promise = fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then(response => response.json())
            .then(dados => {
                pokemons[index] = dados;  
            })
            .catch(error => console.error(`Erro ao buscar Pokémon com ID ${i}:`, error));
        
        promessas.push(promise);
    }

    
    await Promise.all(promessas);

    
    pokemons.forEach(pokemon => {
        CriaPokemon(pokemon, container); 
    });

    
    if (container.children.length > 0) {
        container.style.display = 'flex'; 
    }
}


function CriaPokemon(pokemon, container) {
    const pokemonCard = document.createElement('div');
    pokemonCard.classList.add('pokemon'); 

    if (pokemonLen.includes(pokemon.id)) {
        pokemonCard.classList.add('legendary'); 
        pokemonCard.dataset.raridade = 'lendário';
    } else if (pokemon.id % 3 === 0) {
        pokemonCard.dataset.raridade = 'raro'; 
    } else {
        pokemonCard.dataset.raridade = 'comum';
    }

    const tipo = pokemon.types[0]?.type?.name || 'unknown'; 
    pokemonCard.classList.add(`type-${tipo}`);

    const nome = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1); 
    const types = pokemon.types.map(type => type.type.name).join(', '); 

    pokemonCard.innerHTML = `
        <h2>${nome}</h2>
        <img src="${pokemon.sprites?.front_default ?? 'img/default.png'}" alt="${nome}">
        <p class="type">Tipo: ${types}</p>
        <p><strong>Altura:</strong> ${pokemon.height / 10} m</p>
        <p><strong>Peso:</strong> ${pokemon.weight / 10} kg</p>
    `;

    pokemonCard.onclick = () => ExibirModal(pokemon);
    container.appendChild(pokemonCard); 
}
