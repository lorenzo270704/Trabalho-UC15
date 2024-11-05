const imagem = document.getElementById('imagem');
const content = document.querySelector('.content');
let posicao = content.clientWidth;  
let sentido = -1; 

function animarImagem() {
    posicao += 1.7 * sentido; 

   
    if (posicao < -imagem.width || posicao > content.clientWidth) {
        

  
        imagem.style.transition = 'transform 0.5s ease-in-out';
        imagem.style.transform = `rotateY(${sentido === 1 ? '180deg' : '0deg'})`;
    }

   
    imagem.style.left = posicao + 'px';


    requestAnimationFrame(animarImagem);
}


animarImagem();
