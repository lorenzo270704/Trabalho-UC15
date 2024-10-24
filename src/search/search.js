export async function pesquisarPokemon() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const containers = document.querySelectorAll('.container');
    containers.forEach(cont => cont.innerHTML = '');

    for (let i = 1; i <= 9; i++) {
        const inicia = i === 1 ? 1 : generationLimits[i - 1] + 1;
        const finaliza = generationLimits[i];

        for (let j = inicia; j <= finaliza; j++) {
            const data = await fetchPokemonById(j);
            const nome = data.name.toLowerCase();

            if (nome.includes(input)) {
                const genContainer = document.getElementById(`gen${i}`);
                criacaoPokemonCard(data, genContainer);
                genContainer.style.display = 'flex';
            }
        }
    }
}


