const abas = document.querySelectorAll('.aba');

abas.forEach(aba => {
    aba.addEventListener('click', function() {
        abas.forEach(a => a.classList.remove('ativa'));
        aba.classList.add('ativa');
    });
});