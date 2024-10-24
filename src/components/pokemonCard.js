import { legendarioPokemon } from '../data/generations.js';

function criacaoPokemonCard(pokemon, container) {
    const pokemonCard = document.createElement('div');
    pokemonCard.classList.add('pokemon');

    if (legendarioPokemon.includes(pokemon.id)) {
        pokemonCard.classList.add('legendary');
        pokemonCard.dataset.rarity = 'lendário';
    } else if (pokemon.id % 3 === 0) {
        pokemonCard.dataset.rarity = 'raro';
    } else {
        pokemonCard.dataset.rarity = 'comum';
    }

    const primaryType = pokemon.types[0].type.nome;
    pokemonCard.classList.add(`type-${primaryType}`);

    const nome = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    const tipos = pokemon.types.map(type => type.type.name).join(', ');

    pokemonCard.innerHTML = `
        <h2>${nome}</h2>
        <img src="${pokemon.sprites.front_default}" alt="${nome}">
        <p class="type">Tipo: ${tipos}</p>
        <p><strong>Altura:</strong> ${pokemon.height / 10} m</p>
        <p><strong>Peso:</strong> ${pokemon.weight / 10} kg</p>
    `;

    pokemonCard.onclick = () => showModal(pokemon);
    container.appendChild(pokemonCard);
}

export { criacaoPokemonCard };
