==================================================================================================================================================================================================


 ◓ Pokédex 

Este o projeto de uma Pokédex, onde você pode visualizar e buscar informações sobre todos os Pokémon das 9 gerações.
O objetivo é criar uma página interativa com animações e filtros para uma experiência divertida!


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


 ◓ Funcionalidades

-Pesquisa por Pokémon: Digite o nome de um Pokémon para encontrá-lo.
-Filtros por Raridade: Filtre os Pokémon por raridade: Comum, Raro ou Lendário.
-Exploração por Geração: Navegue pelas 9 gerações de Pokémon com facilidade, clicando nas abas correspondentes.
-Modal de Detalhes: Ao clicar em um Pokémon, abra um modal com informações detalhadas, como:
Tipo(s)
Altura
Peso
Habilidades
Estatísticas (HP, Ataque, Defesa, etc.)
-Design Responsivo: A Pokédex adapta-se a diferentes tamanhos de tela, incluindo dispositivos móveis e tablets.
-Animações Interativas: Animações divertidas de transições e movimentos para tornar a experiência do usuario melhor.


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


 ◓ Tecnologias Utilizadas

-HTML5: Para a estruturação do conteúdo e semântica do site.
-CSS3: Estilização da página e criação de animações.
-JavaScript: Funcionalidade de busca, navegação por gerações e interatividade com o modal.
-Google Fonts: Fonte personalizada Roboto para um visual moderno.


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


 ◓ Como Rodar o Projet

1. Clonar o Repositório
Primeiro, clone este repositório para o seu ambiente local:

bash
Copiar código
git clone https://github.com/lorenzo270704/Trabalho-UC15.git


2. Acessar o Projeto
Navegue até a pasta do projeto:
bash
Copiar código
cd pokedex-completa


3. Abrir no Navegador
Abra o arquivo index.html no seu navegador.
Não há necessidade de servidores ou dependências adicionais, pois o projeto é totalmente estático.


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


 ◓ Estrutura de Diretórios

Aqui está a estrutura de arquivos do projeto:


/pokedex-completa
│
├── /pokedex
│   ├── /css
│   │   └── styles.css         # Arquivo de estilos CSS do projeto
│   ├── /js
│   │   ├── fetch-pokemon.js   # Script para carregar dados dos Pokémon
│   │   ├── main.js            # Funcionalidades principais do aplicativo
│   │   ├── modal.js           # Lógica para exibir o modal de informações dos Pokémon
│   │   └── search-filter.js   # Lógica de busca e filtragem por raridade
│   └── /img
│       ├── 5FBD.gif 
│       ├── Pokemon-Logo-PNG.png
│       ├── TexturaCarta.jpg
│       ├── Pokebackground.png
│       ├── favpng_pikachu-pokémon-yellow-image-pixel.png
│       └── seta-para-cima (1).png
│           
├── index.html                 
└── README.md               


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


 ◓ Como Personalizar

Você pode personalizar o projeto facilmente:

-Alterar Imagens: Substitua as imagens de fundo e o logotipo na pasta /images para personalizar a aparência.
-Modificação das Cores: Altere as cores principais da Pokédex modificando o arquivo styles.css. As cores de destaque (como o amarelo dos botões) podem ser ajustadas na seção correspondente do CSS.
-Fontes: O projeto utiliza a fonte Roboto, mas você pode alterar facilmente a fonte ao editar o link no <head> do arquivo index.html ou alterando o arquivo CSS.


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


 ◓ Design Responsivo
 
Este projeto foi desenvolvido para ser totalmente responsivo, ou seja, ele funciona bem em dispositivos de todos os tamanhos, desde desktops até smartphones.

-Visão Desktop: A Pokédex é exibida com uma interface organizada em múltiplas colunas e com animações visíveis.
-Visão Mobile: Em dispositivos móveis, a interface se adapta para um layout mais compacto e amigável. As abas das gerações se empilham, e os campos de pesquisa e filtros ficam alinhados para facilitar o uso.


==================================================================================================================================================================================================
