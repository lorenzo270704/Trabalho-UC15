const imagem = document.getElementById('imagem');
const content = document.querySelector('.content');
let posicao = content.clientWidth; 

function animarImagem() {
    posicao -= 1.5; 
    imagem.style.left = posicao + 'px';

    if (posicao < -imagem.width) {
        posicao = content.clientWidth; 
    }

    requestAnimationFrame(animarImagem);
}


animarImagem();
