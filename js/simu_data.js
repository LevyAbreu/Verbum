// Dados dos idiomas (simulando dados do usuário)
const languageData = {
    'inglês': { level: 'intermediario', region: 'americas', progress: 65 },
    'espanhol': { level: 'iniciante', region: 'americas', progress: 40 },
    'francês': { level: 'iniciante', region: 'europa', progress: 25 },
    'alemão': { level: 'iniciante', region: 'europa', progress: 0 },
    'italiano': { level: 'iniciante', region: 'europa', progress: 0 },
    'japonês': { level: 'iniciante', region: 'asia', progress: 0 },
    'coreano': { level: 'iniciante', region: 'asia', progress: 0 },
    'mandarim': { level: 'iniciante', region: 'asia', progress: 0 },
    'árabe': { level: 'iniciante', region: 'africa', progress: 0 },
    'russo': { level: 'iniciante', region: 'europa', progress: 0 },
    'português': { level: 'avancado', region: 'americas', progress: 95 }
};

// Elementos DOM
const searchInput = document.getElementById('searchInput');
const levelFilter = document.getElementById('levelFilter');
const regionFilter = document.getElementById('regionFilter');
const languageList = document.getElementById('languageList');
const languageCards = document.querySelectorAll('.language-card');

// Função para filtrar idiomas
function filterLanguages() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedLevel = levelFilter.value;
    const selectedRegion = regionFilter.value;
  
    languageCards.forEach(card => {
      const languageName = card.querySelector('.language-name').textContent.toLowerCase();
      const cardLevel = card.getAttribute('data-level');
      const cardRegion = card.getAttribute('data-region');
  
      // Verificar se o card atende aos critérios de filtro
      const matchesSearch = languageName.includes(searchTerm);
      const matchesLevel = selectedLevel === 'all' || cardLevel === selectedLevel;
      const matchesRegion = selectedRegion === 'all' || cardRegion === selectedRegion;
  
      // Mostrar ou ocultar o card
      if (matchesSearch && matchesLevel && matchesRegion) {
        card.classList.remove('hidden');
        card.style.display = 'block';
      } else {
        card.classList.add('hidden');
        card.style.display = 'none';
      }
    });
  
    // Animar cards visíveis
    animateVisibleCards();
  }
  
  // Função para animar cards visíveis
  function animateVisibleCards() {
    const visibleCards = document.querySelectorAll('.language-card:not(.hidden)');
    visibleCards.forEach((card, index) => {
      card.style.animation = 'none';
      card.offsetHeight; // Trigger reflow
      card.style.animation = `fadeInUp 0.6s ease forwards`;
      card.style.animationDelay = `${index * 0.1}s`;
    });
  }
  
  // Função para lidar com cliques nos botões de ação
  function handleActionButtonClick(event) {
    const button = event.target.closest('.action-btn');
    if (!button) return;
  
    const card = button.closest('.language-card');
    const languageName = card.querySelector('.language-name').textContent;
    const isStartButton = button.classList.contains('start');
  
    // Adicionar estado de loading
    button.classList.add('loading');
    button.disabled = true;
  
    // Simular ação (substituir por lógica real)
    setTimeout(() => {
      if (isStartButton) {
        showNotification(`Iniciando curso de ${languageName}!`, 'success');
      } else {
        showNotification(`Continuando curso de ${languageName}!`, 'info');
      }
  
      // Remover estado de loading
      button.classList.remove('loading');
      button.disabled = false;
    }, 1500);
  }
  
  // Função para mostrar notificações
  function showNotification(message, type = 'info') {
    // Remover notificação existente
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
      existingNotification.remove();
    }
  
    // Criar nova notificação
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        <span>${message}</span>
        <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
          <i class="fas fa-times"></i>
        </button>
      </div>
    `;
  
    // Adicionar estilos da notificação
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 10000;
      background: ${type === 'success' ? '#4CAF50' : '#2196F3'};
      color: white;
      padding: 16px 20px;
      border-radius: 8px;
      box-shadow: 0 4px 16px rgba(0,0,0,0.2);
      animation: slideInRight 0.3s ease;
      max-width: 400px;
    `;
  
    // Adicionar ao DOM
    document.body.appendChild(notification);
  
    // Remover automaticamente após 3 segundos
    setTimeout(() => {
      if (notification.parentElement) {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
      }
    }, 3000);
  }
  
  // Função para toggle da sidebar (mobile)
  function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
  }
  
  // Função para destacar cards ao passar o mouse
  function addCardHoverEffects() {
    languageCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px) scale(1.02)';
      });
  
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
      });
    });
  }
  
  // Função para animar barras de progresso
  function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progressBar = entry.target;
          const targetWidth = progressBar.style.width;
          progressBar.style.width = '0%';
          
          setTimeout(() => {
            progressBar.style.width = targetWidth;
          }, 200);
        }
      });
    }, { threshold: 0.5 });
  
    progressBars.forEach(bar => observer.observe(bar));
  }
  
  // Função para salvar preferências de filtro
  function saveFilterPreferences() {
    const preferences = {
      level: levelFilter.value,
      region: regionFilter.value,
      search: searchInput.value
    };
    localStorage.setItem('languageFilterPreferences', JSON.stringify(preferences));
  }
  
  // Função para carregar preferências de filtro
  function loadFilterPreferences() {
    const saved = localStorage.getItem('languageFilterPreferences');
    if (saved) {
      const preferences = JSON.parse(saved);
      levelFilter.value = preferences.level || 'all';
      regionFilter.value = preferences.region || 'all';
      searchInput.value = preferences.search || '';
      filterLanguages();
    }
  }
  
  // Função para adicionar atalhos de teclado
  function addKeyboardShortcuts() {
    document.addEventListener('keydown', (event) => {
      // Ctrl/Cmd + F para focar na busca
      if ((event.ctrlKey || event.metaKey) && event.key === 'f') {
        event.preventDefault();
        searchInput.focus();
      }
  
      // Escape para limpar filtros
      if (event.key === 'Escape') {
        searchInput.value = '';
        levelFilter.value = 'all';
        regionFilter.value = 'all';
        filterLanguages();
        searchInput.blur();
      }
    });
  }
  
  // Função para adicionar efeitos de loading nos cards
  function addLoadingEffects() {
    languageCards.forEach(card => {
      const actionBtn = card.querySelector('.action-btn');
      
      actionBtn.addEventListener('click', (event) => {
        event.preventDefault();
        
        // Adicionar efeito de ripple
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.cssText = `
          position: absolute;
          border-radius: 50%;
          background: rgba(255,255,255,0.6);
          transform: scale(0);
          animation: ripple 0.6s linear;
          pointer-events: none;
        `;
        
        const rect = actionBtn.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (event.clientX - rect.left - size / 2) + 'px';
        ripple.style.top = (event.clientY - rect.top - size / 2) + 'px';
        
        actionBtn.style.position = 'relative';
        actionBtn.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
      });
    });
  }
  
  // Event listeners
  document.addEventListener('DOMContentLoaded', () => {
    // Carregar preferências salvas
    loadFilterPreferences();
    
    // Adicionar event listeners para filtros
    searchInput.addEventListener('input', () => {
      filterLanguages();
      saveFilterPreferences();
    });
    
    levelFilter.addEventListener('change', () => {
      filterLanguages();
      saveFilterPreferences();
    });
    
    regionFilter.addEventListener('change', () => {
      filterLanguages();
      saveFilterPreferences();
    });
  
    // Adicionar event listeners para botões de ação
    languageList.addEventListener('click', handleActionButtonClick);
  
    // Adicionar efeitos visuais
    addCardHoverEffects();
    animateProgressBars();
    addKeyboardShortcuts();
    addLoadingEffects();
  
    // Animar cards na inicialização
    setTimeout(animateVisibleCards, 100);
  });
  
  // Adicionar estilos CSS para animações via JavaScript
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideInRight {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
  
    @keyframes slideOutRight {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(100%);
        opacity: 0;
      }
    }
  
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  
    .notification-content {
      display: flex;
      align-items: center;
      gap: 12px;
    }
  
    .notification-close {
      background: none;
      border: none;
      color: white;
      cursor: pointer;
      padding: 4px;
      border-radius: 4px;
      transition: background-color 0.2s;
    }
  
    .notification-close:hover {
      background-color: rgba(255,255,255,0.2);
    }
  
    .language-card.loading {
      opacity: 0.7;
      pointer-events: none;
    }
  
    .action-btn.loading {
      background-color: #ccc !important;
      cursor: not-allowed;
    }
  
    .action-btn.loading::after {
      content: '';
      width: 16px;
      height: 16px;
      border: 2px solid transparent;
      border-top: 2px solid white;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin-left: 8px;
    }
  
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
  
  // Exportar funções para uso global
  window.toggleSidebar = toggleSidebar;
  window.filterLanguages = filterLanguages;  