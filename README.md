# Seguros Vida+

Esse projeto consiste em uma interface web para um serviço fictício de seguros chamado **Seguros Vida+**. O objetivo é apresentar de forma clara e interativa os planos de seguros disponíveis e permitir que os usuários simulem o valor mensal do seguro com base em seus dados e no plano escolhido.

## Funcionalidades

- **Navegação Intuitiva:**  
  O site conta com uma barra de navegação que direciona para as páginas de Login, Cadastro, além de seções como Planos, Simulador e Contato.

- **Apresentação dos Planos:**  
  São exibidos três planos de seguros:
  - **Essencial:** Proteção básica para imprevistos – a partir de R$ 29,90/mês.
  - **Completo:** Cobertura para doenças graves e acidentes – a partir de R$ 59,90/mês.
  - **Premium:** Plano vitalício com benefícios em vida – a partir de R$ 99,90/mês.

- **Simulador Interativo:**  
  Permite que o usuário informe sua idade e selecione um plano. O simulador:
  - **Valida** a idade (permitindo apenas valores entre 0 e 110 anos).
  - **Calcula** o preço base do seguro conforme o plano.
  - **Adiciona acréscimos**: 
    - +20% para usuários com idade acima de 40 anos.
    - +50% para usuários com idade acima de 60 anos.
  - Exibe dinamicamente o valor final estimado do seguro na página.

## Tecnologias Utilizadas

- **HTML5:** Estrutura o conteúdo das páginas.
- **CSS:** Responsável pela estilização e layout (arquivo `style.css`).
- **JavaScript:** Implementa a lógica do simulador e a interatividade da aplicação (arquivo `script.js`).
