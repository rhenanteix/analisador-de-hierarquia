# Analisador de Hierarquia

Este projeto é um analisador de hierarquia de palavras, que inclui uma interface frontend construída em React e uma CLI em TypeScript. O objetivo deste projeto é fornecer uma ferramenta para analisar frases e suas hierarquias.

## Tabela de Conteúdos

- [Pré-requisitos](#pré-requisitos)
- [Inicializando o Projeto](#inicializando-o-projeto)
  - [1. Clone o Repositório](#1-clone-o-repositório)
  - [2. Instale as Dependências](#2-instale-as-dependências)
    - [Backend (CLI)](#backend-cli)
    - [Frontend (React)](#frontend-react)
  - [3. Execute o Projeto](#3-execute-o-projeto)
    - [Backend (CLI)](#backend-cli-1)
    - [Frontend (React)](#frontend-react-1)
- [Executando os Testes](#executando-os-testes)
  - [1. Testes da CLI](#1-testes-da-cli)
  - [2. Testes do Frontend](#2-testes-do-frontend)
- [Resolução de Problemas](#resolução-de-problemas)
- [Contribuições](#contribuições)
- [Licença](#licença)

## Pré-requisitos

Antes de começar, certifique-se de que você tem os seguintes softwares instalados em seu sistema:

- [Node.js](https://nodejs.org/) (v14 ou superior)
- [npm](https://www.npmjs.com/) (geralmente instalado com o Node.js)
- [TypeScript](https://www.typescriptlang.org/) (opcional, se você quiser instalar globalmente)

## Inicializando o Projeto

### 1. Clone o Repositório

```bash
git clone https://github.com/seuusuario/analisador-de-hierarquia.git
cd analisador-de-hierarquia
npm install 

cd frontend
npm install
```


Backend (CLI)
Para usar a CLI, você pode executar os seguintes comandos no terminal:

```bash
npx ts-node src/cli.ts analyze --depth <NÚMERO> "<SUA FRASE>" --verbose
```

Frontend (React)
Para iniciar o servidor de desenvolvimento do React, navegue até o diretório do frontend e execute:

```bash
npm start
```

para os testes apenas rodar:

```bash
npm test
```