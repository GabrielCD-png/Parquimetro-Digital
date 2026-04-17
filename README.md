# Parquímetro Inteligente

Este é um projeto interativo web que simula o funcionamento de um parquímetro urbano. O objetivo principal foi aplicar os conceitos de **Programação Orientada a Objetos (POO)** em JavaScript para separar a lógica de negócios da manipulação visual da página.

## Funcionalidades

* **Cálculo de Tempo e Troco**: O sistema recebe um valor em dinheiro e calcula automaticamente o tempo de permanência permitido (30, 60 ou 120 minutos), além de processar o troco exato, se houver.
* **Validação de Regras de Negócio**: Bloqueia transações com valores inferiores à tarifa mínima (R$ 1,00) e emite alertas visuais para o usuário.
* **Interface Dinâmica**: O DOM é atualizado em tempo real com base no retorno dos métodos da classe, ocultando ou exibindo o painel de resultados conforme necessário.

## Tecnologias Utilizadas

* **HTML5**: Estruturação semântica, formulários de entrada e botões de ação.
* **CSS3**: Estilização responsiva com foco em UI/UX, utilizando cores de contraste para alertas e resultados.
* **JavaScript (ES6+)**:
  * Implementação de `class` para encapsulamento da lógica.
  * Criação de métodos específicos para cálculos (`calcularTicket`) e para manipulação de tela (`processarPagamento`).
  * Tratamento de eventos de clique.

## Como Executar

1. Clone este repositório para o seu ambiente local.
2. Abra o arquivo `index.html` no seu navegador de preferência.
3. Insira um valor numérico (min.R$01,00) no campo de texto.
4. Clique em **Emitir Ticket** para visualizar o tempo liberado e o seu troco.

---
Desenvolvido por Gabriel como parte do portfólio prático de Desenvolvimento Front-End.
