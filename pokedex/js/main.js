function geracao(gen) {
    document.querySelectorAll('.container').forEach(container => {
        container.style.display = 'none'; 
    });

    BuscarPokemon(gen); 
}

geracao(1);
