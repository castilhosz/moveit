

<h1 align="center">
    💪  Moveit
</h1>

<h3 align="center">
     Seu pomodoro pra exercicíos, ideal para quem passa diversas horas em frente ao computador. 
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/arthrrc/moveitNextjs?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/arthrrc/moveitNextjs">

  <a href="https://www.twitter.com/arthrrc/">
    <img alt="Siga no Twitter" src="https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%2Farthrrc%2FmoveitNextjs">
  </a>
  
  <a href="https://github.com/arthrrc/moveit/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/arthrrc/moveitNextjs">
  </a>
    
   <a href="https://github.com/arthrrc/moveit/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/arthrrc/moveitNextjs?style=social">
  </a>
  
 
</p>

<h4 align="center">
	🚧   Episódios 2/5 🚀 🚧
</h4>

Tabela de conteúdos
=================
<!--ts-->
   * [Sobre o projeto](#-sobre-o-projeto)
   * [Funcionalidades](#-funcionalidades)
   * [Layout](#-layout)
     * [Web](#web)
   * [Como executar o projeto](#-como-executar-o-projeto)
     * [Pré-requisitos](#pré-requisitos)
     * [Rodando a aplicação web (Frontend)](#user-content--rodando-a-aplicação-web-frontend)
   * [Tecnologias](#-tecnologias)
   * [Como contribuir no projeto](#-como-contribuir-no-projeto)
   * [Autor](#-autor)
<!--te-->


## 💻 Sobre o projeto

💪  Moveit - é uma forma de motivar as pessoas a fazerem exercícios enquanto trabalham ou jogam. Funcioando estilo um pomodoro, promovendo desafios para que o usuário não fique totalmente parado.


Projeto desenvolvido durante a **NLW - Next Level Week** oferecida pela [Rocketseat](https://nextlevelweek.com/episodios/react/1/edicao/4).
O NLW é uma experiência online com muito conteúdo prático, desafios e hacks onde o conteúdo fica disponível durante uma semana.

---

## ⚙️ Funcionalidades

- [ ] Os usuários pode se cadastrar na aplicação usando
  - [ ] uma imagem escolhida pelo usuário
  - [ ] nome do usuário e email

- [X] Os usuários podem iniciar um ciclo (vindo by default 25min) 
- [X] Os usuários podem abandonar o ciclo atual
- [X] Os usuários tem uma barra de experiência onde
  - [X] Eles podem upar de nível ao alcançar a quantidade de experiência desejada
    - [X] Ao upar de nível, eles recebem um parabéns pela aplicação
  - [X] Os usuários, ao final de cada ciclo, recebem um desafio que ao concluido o da certas quantidades de experiência
- [ ] Os usuários podem ver o histórico de desafios concluidos

---

## 🎨 Layout

O layout da aplicação está disponível no Figma:

<a href="https://www.figma.com/file/ge20pu3ofMOKoliUyKx1Nl/Move.it-1.0/">
  <img alt="Made by @tiagoluchtenberg" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361">
</a>

---

## 🚀 Como executar o projeto

Este projeto é divido em três partes:
1. Backend (pasta server) 
2. Frontend (pasta web)

💡O Frontend precisa que o Backend esteja sendo executado para funcionar.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)


#### 🧭 Rodando a aplicação web (Frontend)

```bash

# Clone este repositório
$ git clone git@github.com:arthrrc/moveitNextjs.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd moveitNextjs

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website**  ([React](https://reactjs.org/)  +  [TypeScript](https://www.typescriptlang.org/))

<!--   **[React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**
-   **[React Icons](https://react-icons.github.io/react-icons/)**
-   **[Axios](https://github.com/axios/axios)**
-   **[Leaflet](https://react-leaflet.js.org/en/)**
-   **[React Leaflet](https://react-leaflet.js.org/)**
-   **[React Dropzone](https://github.com/react-dropzone/react-dropzone)**

> Veja o arquivo  [package.json](https://github.com/tgmarinho/README-ecoleta/blob/master/web/package.json)

#### [](https://github.com/tgmarinho/Ecoleta#server-nodejs--typescript)**Server**  ([NodeJS](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Express](https://expressjs.com/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[KnexJS](http://knexjs.org/)**
-   **[SQLite](https://github.com/mapbox/node-sqlite3)**
-   **[ts-node](https://github.com/TypeStrong/ts-node)**
-   **[dotENV](https://github.com/motdotla/dotenv)**
-   **[Multer](https://github.com/expressjs/multer)**
-   **[Celebrate](https://github.com/arb/celebrate)**
-   **[Joi](https://github.com/hapijs/joi)**

> Veja o arquivo  [package.json](https://github.com/tgmarinho/README-ecoleta/blob/master/server/package.json)

-->

#### [](https://github.com/tgmarinho/Ecoleta#utilit%C3%A1rios)**Utilitários**

-   Protótipo:  **[Figma](https://www.figma.com/)**  →  **[Protótipo (Ecoleta)](https://www.figma.com/file/1SxgOMojOB2zYT0Mdk28lB/Ecoleta)**
-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**  
-   Teste de API:  **[Insomnia](https://insomnia.rest/)**
-   Fontes:  **[Inter](https://fonts.google.com/specimen/Inter)**,  **[Radjhani](https://fonts.google.com/specimen/Rajdhani)**


---

## 💪 Como contribuir no projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](./CONTRIBUTING.md)


Feito com ❤️ por Arthur Castilhos 👋 [Entre em contato!](https://www.linkedin.com/in/arthrc/)