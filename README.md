# Verbum – Plataforma de Aprendizado de Idiomas

## Visão Geral

Verbum é uma plataforma educacional inovadora e interativa, projetada para facilitar o aprendizado de idiomas de forma dinâmica e eficiente. Através de módulos cuidadosamente estruturados, a plataforma oferece uma experiência de usuário envolvente, adaptando-se a diferentes níveis de proficiência e estilos de aprendizado. Nosso objetivo é proporcionar um ambiente completo para que os usuários possam desenvolver suas habilidades linguísticas, acompanhar seu progresso e personalizar sua jornada de aprendizado.

> Acesse a versão online: [Verbum](https://levyabreu.github.io/Verbum)

## Funcionalidades Principais

### Módulos Interativos de Aprendizado

*   **Aulas Dinâmicas:** Conteúdo didático organizado em módulos temáticos, abrangendo gramática, vocabulário, pronúncia e cultura.
*   **Exercícios Práticos:** Atividades interativas, como preenchimento de lacunas, arrastar e soltar, e quizzes, para reforçar o aprendizado.
*   **Feedback Instantâneo:** Respostas imediatas para exercícios, permitindo que os usuários corrijam erros e compreendam os conceitos rapidamente.

### Acompanhamento de Progresso Personalizado

*   **Painel de Progresso:** Visualização clara do desempenho do usuário, incluindo módulos concluídos, pontuações e tempo de estudo.
*   **Estatísticas Detalhadas:** Gráficos e relatórios que mostram a evolução do aprendizado ao longo do tempo, identificando pontos fortes e áreas que precisam de melhoria.
*   **Metas de Aprendizado:** Definição de objetivos personalizados para motivar o usuário a alcançar novos níveis de proficiência.

### Experiência do Usuário Otimizada

*   **Interface Intuitiva:** Design limpo e fácil de navegar, garantindo uma experiência de aprendizado agradável.
*   **Responsividade:** Compatibilidade total com dispositivos móveis e desktops, permitindo o acesso à plataforma a qualquer hora e em qualquer lugar.
*   **Personalização de Perfil:** Opções para configurar preferências de aprendizado, temas visuais e notificações.

## Seções da Plataforma

*   **Home:** Página inicial com uma visão geral da plataforma, destaques e acesso rápido aos idiomas mais populares.
*   **Idiomas:** Catálogo completo de idiomas disponíveis, com informações sobre níveis de dificuldade e opções de seleção.
*   **Módulos:** Biblioteca de aulas e quizzes organizados por idioma e nível de proficiência.
*   **Progresso:** Área dedicada ao acompanhamento do desempenho e estatísticas de aprendizado do usuário.
*   **Perfil:** Configurações de conta, personalização de preferências e acesso a dados de uso.

## Tecnologias Utilizadas

O projeto Verbum é construído com as seguintes tecnologias:

*   **HTML5:** Para a estrutura semântica e conteúdo das páginas web.
*   **CSS3:** Para estilização, layout responsivo e animações, garantindo uma interface de usuário agradável e adaptável a diferentes dispositivos.
*   **JavaScript (ES6+):** Para a lógica de negócio, interatividade da plataforma e manipulação de dados.
*   **Firebase:** Utilizado para autenticação de usuários, armazenamento de dados em tempo real e outras funcionalidades de backend, proporcionando uma experiência robusta e escalável.

## Estrutura do Projeto

A estrutura de diretórios do projeto Verbum é organizada da seguinte forma:

```
Verbum/
├── assets/           # Contém imagens, ícones e outros recursos estáticos
├── css/              # Folhas de estilo CSS para o design da interface
├── js/               # Arquivos JavaScript para a lógica do frontend e interatividade
│   ├── firebase-config.js  # Configurações do Firebase
│   ├── firebase-service.js # Serviços de interação com o Firebase
│   └── ...                 # Outros arquivos JavaScript específicos de funcionalidades
├── pages/            # Páginas HTML específicas da aplicação (ex: idiomas, módulos, progresso, perfil)
├── README.md         # Este arquivo README
└── index.html        # Página inicial da aplicação
```

## Como Usar

Para configurar e rodar o projeto Verbum localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/LevyAbreu/Verbum.git
    ```
2.  **Navegue até o diretório do projeto:**
    ```bash
    cd Verbum
    ```
3.  **Abra o arquivo `index.html`:**
    Abra o arquivo `index.html` em seu navegador web preferido (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, etc.).
4.  **Configuração do Firebase (Opcional, para funcionalidades completas):**
    Se você deseja utilizar as funcionalidades de autenticação e banco de dados do Firebase, precisará configurar seu próprio projeto Firebase e atualizar o arquivo `js/firebase-config.js` com suas credenciais. Consulte a documentação oficial do Firebase para mais detalhes.

## Melhorias Futuras

Estamos constantemente trabalhando para aprimorar a plataforma Verbum. Algumas das melhorias planejadas incluem:

*   **Novos Idiomas e Módulos:** Expansão do catálogo de idiomas e adição de mais módulos de aprendizado.
*   **Recursos de Áudio e Fala:** Integração de funcionalidades de reconhecimento de fala e síntese de voz para aprimorar a prática de pronúncia.
*   **Gamificação:** Implementação de elementos de gamificação, como pontos, distintivos e tabelas de classificação, para aumentar o engajamento dos usuários.
*   **Aplicativo Mobile Nativo:** Desenvolvimento de versões nativas para iOS e Android, proporcionando uma experiência otimizada em dispositivos móveis.
*   **Comunidade e Interação:** Criação de fóruns ou funcionalidades de chat para que os usuários possam interagir e praticar com outros aprendizes.

## Autoria

Desenvolvido por **Levy Abreu** [GitHub](https://github.com/LevyAbreu)

### Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo `LICENSE` no repositório para mais detalhes.

