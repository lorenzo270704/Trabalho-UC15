function showGeneration(gen) {
    document.querySelectorAll('.container').forEach(container => {
        container.style.display = 'none'; 
    });

    fetchPokemon(gen); 
}

showGeneration(1);
