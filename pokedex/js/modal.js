let indicePokemon = 0;

function ExibirModal(pokemon) {
    indicePokemon = pokemon.id;

    const modal = document.getElementById('pokemonModal');
    document.getElementById('modalNome').innerText = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    document.getElementById('modalImagem').src = pokemon.sprites.front_default;
    document.getElementById('modalAltura').innerText = (pokemon.height / 10).toFixed(1);
    document.getElementById('modalPeso').innerText = (pokemon.weight / 10).toFixed(1);
    document.getElementById('modalTipo').innerText = 'Tipo: ' + pokemon.types.map(type => type.type.name).join(', ');
    document.getElementById('modalHabilidade').innerText = pokemon.abilities.map(ability => ability.ability.name).join(', ');

    const listar = document.getElementById('modalEstatistica');
    listar.innerHTML = '';
    pokemon.stats.forEach(stat => {
        const listItem = document.createElement('li');
        listItem.innerText = `${stat.stat.name}: ${stat.base_stat}`; 
        listar.appendChild(listItem);
    });

   
    const modalContent = document.querySelector('.modal-content');
    modalContent.classList.add('girar');
    
   
    setTimeout(() => {
        modalContent.classList.remove('girar');
    }, 500); 

    modal.style.display = 'flex'; 
    botaoNav(pokemon.id); 
}

function navegar(direction) {
    const proxId = indicePokemon + direction; 
    fetch(`https://pokeapi.co/api/v2/pokemon/${proxId}`)
        .then(chama => {
            if (chama.ok) {
                return chama.json();
            } else {
                throw new Error('Pokémon não encontrado'); 
            }
        })
        .then(dados => ExibirModal(dados)) 
        .catch(error => console.error(error)); 
}

function botaoNav(currentId) {
    document.getElementById('anteButton').style.display = currentId > 1 ? 'inline-block' : 'none'; 
    document.getElementById('proxiButton').style.display = currentId < 1010 ? 'inline-block' : 'none'; 
}

function fechaModal() {
    const modal = document.getElementById('pokemonModal');
    modal.style.display = 'none'; 
}
