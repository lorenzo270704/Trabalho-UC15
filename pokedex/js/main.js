// Função para exibir Pokémons de uma geração específica, ocultando os demais containers.
function geracao(gen) {
    document.querySelectorAll('.container').forEach(container => {
        container.style.display = 'none'; 
    });

    BuscarPokemon(gen); 
}

geracao(1);
