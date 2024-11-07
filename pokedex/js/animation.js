const imagem = document.getElementById('imagem');
const content = document.querySelector('.content');
let sentido = -1;
let espelhado = false; 

let posicao = content.clientWidth;

function animarImagem() {
    posicao += 1.7 * sentido;

    if (posicao < -imagem.width) {
        posicao = content.clientWidth;
        sentido = -1; 
        espelhado = !espelhado; 

        imagem.style.transition = 'none';
        imagem.style.transform = `scaleX(${espelhado ? -1 : 1})`;
    }

    imagem.style.left = posicao + 'px';

    requestAnimationFrame(animarImagem);
}


animarImagem();
