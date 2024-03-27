# Automação de teste em cypress

Projeto de exemplo para realização de testes utilizando o Cypress

## Pré-requisitos:

- [NodeJS](https://nodejs.org/en/download/ "NodeJS")

## Ferramentas utilizadas:

- [VSCode](https://code.visualstudio.com/ "VSCode")
- [Cypress](https://www.npmjs.com/package/cypress "Cypress")

## Tutorial, Instalação e Execução

- No terminal, dentro da pasta do projeto, execute o seguinte comando:

**Instalar as dependências:**
1 - Instalar o cypress

```
npm install cypress
```

### Utilizando o cypress

- Em um terminal execute um dos comandos abaixo para abrir o cypress:

```
npx cypress open
```

Entre no teste desejado:

```
e2e
```

### Lógica utilizada para os cenários de testes

Todos os cenários de testes foram criados pensando na estrutura do cypress
descrição: utilizado geralmente para agrupar testes de funcionalidades

- Cenários de Login
  Foi feito um cenário de teste para a realização do login com todas as contas disponiveis,
  testando se a conta é valida para ascesso.

- Cenários de carrinho
  Foi feito o cenário para adicionar um produto ao carrinho, verificar se ele realmente foi adicionado,
  e a remoção desse produto do carrinho.
