# Calculadora de Empréstimos
Este é um aplicativo web desenvolvido com Angular, que atua como uma calculadora de empréstimos. Ele permite ao usuário inserir os detalhes de um empréstimo (datas, valores e taxas) e, ao clicar em "Calcular", consome uma API de backend para obter um plano de pagamento detalhado.

## Como executar

### Pré-requisitos
- **Node.js e npm: (v14.x ou superior)**
- **Angular CLI: Instale com o comando `npm install -g @angular/cli`**

### 1. Navegue até a pasta raiza do projeto angular
### 2. Instale as dependências
```
npm install
```
### 3. Excecute a aplicação:
```
ng serve
```


## Tecnologias
- **Angular 20**
- **Tailwind CSS**
- **Style: SCSS**



## Funcionalidades do Aplicativo
* **Formulário de Empréstimo**
    * Um formulário simples e intuitivo para inserir os dados do empréstimo.

* **Validação de Formulário** 
    * Validação em tempo real para garantir que todos os campos obrigatórios sejam preenchidos.

* **Validação de Datas**
     * A "Data Final" e o "Primeiro Pagamento" não podem ser anteriores à "Data Inicial".
        * O calendário desabilita automaticamente as datas inválidas.

* **Integração com API**
    * Ao clicar em "Calcular", o front-end envia os dados para a API do Spring Boot.
        * Link: https://github.com/xltgui/loan-calculator-api.git

* **Tabela de Pagamentos**
    * Uma tabela é exibida com os detalhes do plano de pagamento, incluindo datas, valores de amortização e saldos.

* **Arquitetura**
    * O projeto segue a estrutura padrão do Angular. Os arquivos mais relevantes são:
```
src/
└── app/
├── calculator/                          # 💻 Módulo do componente principal
    │   ├── calculator.component.html
    │   ├── calculator.component.scss
    │   ├── calculator.component.spec.ts
    │   └── calculator.component.ts      # 🎯 Lógica para validações de campos e chamada da camada de serviço
    ├── models/                          # 📂 Interface para receber os dados do backend
    │   └── payment-detail-response.ts
    └── services/                        # 🛠️ Serviço responsável por chamar a requisição dos detalhes do empréstimo
```
