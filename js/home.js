document.addEventListener("DOMContentLoaded", () => {
  // Elementos das telas
  const telaInicio = document.getElementById('tela-inicio');
  const telaIdioma = document.getElementById('tela-idioma');
  const telaModulo = document.getElementById('tela-modulo');
  const telaExercicio = document.getElementById('tela-exercicio');
  const telaConclusao = document.getElementById('tela-conclusao');
  
  // Botões de ação
  const btnComecar = document.getElementById('btn-comecar');
  const btnEscolherIdioma = document.getElementById('btn-escolher-idioma');
  const btnSelecionarModulo = document.getElementById('btn-selecionar-modulo');
  const btnAvancar = document.getElementById('btn-avancar');
  
  // Listas de seleção
  const listaIdiomas = document.getElementById('lista-idiomas');
  const listaModulos = document.getElementById('lista-modulos');
  
  // Variáveis para armazenar as seleções
  let idiomaSelecionado = null;
  let moduloSelecionado = null;
  
  // Índice da tela atual
  let telaAtual = 0;
  
  // Array com todas as telas
  const telas = [telaInicio, telaIdioma, telaModulo, telaExercicio, telaConclusao];
  
  // Função para mostrar uma tela específica
  function mostrarTela(indice) {
      // Esconder todas as telas
      telas.forEach(tela => {
          tela.classList.remove('active');
      });
      
      // Mostrar a tela atual
      if (telas[indice]) {
          telas[indice].classList.add('active');
      }
      
      telaAtual = indice;
      console.log(`Tela atual: ${indice}`);
  }
  
  // Função para avançar para a próxima tela
  function proximaTela() {
      if (telaAtual < telas.length - 1) {
          mostrarTela(telaAtual + 1);
      }
  }
  
  // Inicializar mostrando a primeira tela
  mostrarTela(0);
  
  // Event listener para o botão "Começar"
  btnComecar.addEventListener('click', () => {
      console.log('Botão Começar clicado');
      proximaTela(); // Vai para a tela de seleção de idioma
  });
  
  // Event listener para o botão "Escolher Idioma"
  btnEscolherIdioma.addEventListener('click', () => {
      console.log('Botão Escolher Idioma clicado');
      listaIdiomas.classList.toggle('show');
  });
  
  // Event listeners para os itens da lista de idiomas
  listaIdiomas.querySelectorAll('li').forEach(item => {
      item.addEventListener('click', () => {
          idiomaSelecionado = item.dataset.idioma;
          console.log(`Idioma selecionado: ${idiomaSelecionado}`);
          
          // Atualizar o texto do botão para mostrar a seleção
          btnEscolherIdioma.textContent = `Idioma: ${idiomaSelecionado}`;
          
          // Esconder a lista
          listaIdiomas.classList.remove('show');
          
          // Avançar para a próxima tela após um pequeno delay
          setTimeout(() => {
              proximaTela(); // Vai para a tela de seleção de módulo
          }, 500);
      });
  });
  
  // Event listener para o botão "Selecionar Módulo"
  btnSelecionarModulo.addEventListener('click', () => {
      console.log('Botão Selecionar Módulo clicado');
      listaModulos.classList.toggle('show');
  });
  
  // Event listeners para os itens da lista de módulos
  listaModulos.querySelectorAll('li').forEach(item => {
      item.addEventListener('click', () => {
          moduloSelecionado = item.dataset.modulo;
          console.log(`Módulo selecionado: ${moduloSelecionado}`);
          
          // Atualizar o texto do botão para mostrar a seleção
          btnSelecionarModulo.textContent = `Módulo: ${moduloSelecionado}`;
          
          // Esconder a lista
          listaModulos.classList.remove('show');
          
          // Avançar para a próxima tela após um pequeno delay
          setTimeout(() => {
              proximaTela(); // Vai para a tela de exercício
          }, 500);
      });
  });
  
  // Event listener para o botão "Avançar"
  btnAvancar.addEventListener('click', () => {
      console.log('Botão Avançar clicado');
      console.log(`Configuração final - Idioma: ${idiomaSelecionado}, Módulo: ${moduloSelecionado}`);
      proximaTela(); // Vai para a tela de conclusão
  });
  
  // Função para fechar listas quando clicar fora delas
  document.addEventListener('click', (event) => {
      if (!btnEscolherIdioma.contains(event.target) && !listaIdiomas.contains(event.target)) {
          listaIdiomas.classList.remove('show');
      }
      
      if (!btnSelecionarModulo.contains(event.target) && !listaModulos.contains(event.target)) {
          listaModulos.classList.remove('show');
      }
  });
  
  // Função para obter as seleções atuais (útil para outras partes do código)
  window.getSelecoes = function() {
      return {
          idioma: idiomaSelecionado,
          modulo: moduloSelecionado
      };
  };
  
  // Log inicial
  console.log('Sistema de navegação inicializado');
});


// Código do Slider de Imagens (hero-slide)
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.hero-slide');
  const btnPrev = document.getElementById('hero-prev');
  const btnNext = document.getElementById('hero-next');

  let index = 0;
  let autoSlideInterval;

  function showSlide(newIndex) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active', 'previous');
      if (i === newIndex) {
        slide.classList.add('active');
      } else if (i === index) {
        slide.classList.add('previous');
      }
    });
    index = newIndex;
  }

  function nextSlide() {
    let next = (index + 1) % slides.length;
    showSlide(next);
  }

  function prevSlide() {
    let prev = (index - 1 + slides.length) % slides.length;
    showSlide(prev);
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 7000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  btnNext.addEventListener('click', () => {
    nextSlide();
    resetAutoSlide();
  });

  btnPrev.addEventListener('click', () => {
    prevSlide();
    resetAutoSlide();
  });

  // Inicializa
  showSlide(0);
  startAutoSlide();
});