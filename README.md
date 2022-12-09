# Aplicação Full Stack - Pokedex
###### by _[Vitor Vieira](https://www.linkedin.com/in/vtorvieira/)_

## Resumo BackEnd

Aplicação consiste em criar uma API de pokemons, onde você ao acessar a pagina principal carrega uma lista de pokemons, e para acessar é necessário ter um cadastro, e é possível fazer login com **email** e **password**.
A **API** foi desenvolvida em **NodeJS**, **Express** e **PostgreSQL**. Possui uma arquitetura **MSC** e ORM **Sequelize**. Também possui autenticação com **JWT**, e tratamento de erros com **express-async-errors**.

## Resumo FrontEnd

Possui uma interface que consome a API desenvolvida no BackEnd, onde é possível se cadastrar e fazer login e vizualizar a lista de pokemons.
Foi desenvolvido em **ReactJS**. A estilização foi feita com **Tailwind**, Radix Ui, e **Axios** para fazer as requisições à API.

## Para acessar

Foi realizado um deploy do Backend na plataforma railway e o Frontend na plataforma vercel

Link: https://pokedex-eta-sooty.vercel.app/
  
## Rotas Api

#### Login
```
http://localhost:3001/login
```

#### Cadastro
```
http://localhost:3001/register
```

#### Pokemons
```
http://localhost:3001/pokemons
```

## Regra de Negócio para Transações

<ul>
  <li>Só usuários cadastrados e autenticados podem acessar a pagina de pokemons!</li>
</ul>
