async function PesquisarPokemon() {
    const input = document.getElementById('pesquisarInput').value.toLowerCase(); 
    const containers = document.querySelectorAll('.container');
    containers.forEach(cont => cont.innerHTML = ''); 

    for (let i = 1; i <= 9; i++) {
        const inicia = i === 1 ? 1 : geracaoLimite[i - 1] + 1;
        const termina = geracaoLimite[i];

        for (let j = inicia; j <= termina; j++) {
            const chama = await fetch(`https://pokeapi.co/api/v2/pokemon/${j}`);
            const dados = await chama.json();
            const nome = dados.name.toLowerCase();

            if (nome.includes(input)) {
                const geracaoContainer = document.getElementById(`gen${i}`);
                CriaPokemon(dados, geracaoContainer);
                geracaoContainer.style.display = 'flex'; 
            }
        }
    }
}

function filtraRaridade() {
    const raridade = document.getElementById('raridade-Select').value; 
    const containers = document.querySelectorAll('.container .pokemon');

    containers.forEach(pokemon => {
        if (raridade === '' || pokemon.dataset.raridade === raridade) {
            pokemon.style.display = 'block';
        } else {
            pokemon.style.display = 'none';
        }
    });
}
