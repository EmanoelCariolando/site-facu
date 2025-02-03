

 const frases = [
    "A violência doméstica é um crime. Denuncie!",
    "Disque 180 para denúncias de violência contra a mulher.",
    "Proteja-se e proteja quem você ama.",
    "A violência não é a solução. Busque ajuda.",
    "Você não está sozinha. Conte conosco."
];

// Função para criar quadros com frases
function criarQuadros() {
    const container = document.getElementById('quadros-container');
    container.innerHTML = ''; // Limpa o conteúdo anterior
    frases.forEach(frase => {
        const quadro = document.createElement('div');
        quadro.className = 'quadro';

        const paragrafo = document.createElement('p');
        paragrafo.textContent = frase;

        quadro.appendChild(paragrafo);
        container.appendChild(quadro);  
    });   
    const botao = document.querySelector('.buttonQu');
    botao.classList.add('remover');
    
    let botaoMore = document.createElement(`button`);
    botaoMore.textContent = 'Saber Mais';
    botaoMore.className = 'moreThings';
    botaoMore.addEventListener("click", () => {
        window.location.href = "https://www.institutomariadapenha.org.br/";
      });
    container.appendChild(botaoMore);

  
}

// Adiciona o evento de clique ao botão
  document.getElementById('mostrarQuadros').addEventListener('click', criarQuadros);

let text = document.querySelector('.text');
function piscarTexto() {
    if (text.style.visibility === 'hidden') {
        text.style.visibility = 'visible';
    } else {
        text.style.visibility = 'hidden';
    }
}

// Configura o intervalo para piscar o texto a cada 500ms (0.5 segundos)
 setInterval(piscarTexto, 500);