![Cover](./.github/cover.png)

# NLW Expert Polls (Node.js)

Um sistema de votação em tempo real onde o usuário pode criar uma enquete e outros usuários podem votar.

A aplicação gerencia a votação feita pelo usuário de forma que o mesmo não faça votação em duplicidade para a mesma enquete. Porem permite que o usuário possa votar em outra opção da enquete, entretanto o voto anterior será descartado.

O sistema gera um ranking entre as opções e atualiza os votes em tempo real através do websocket.

## ⚡ Funcionalidades

###  _Requisições HTTP_

### POST `/polls`

Criar uma nova enquete.

#### Corpo da requisição

```json
{
  "title": "Qual a melhor linguagem de programação?",
  "options": [
    "JavaScript",
    "Java",
    "PHP",
    "C#"
  ]
}
```
 \* Todos os campos são obrigatórios.

#### Resposta
`HTTP 201 OK`

```json
{
  "pollId": "194cef63-2ccf-46a3-aad1-aa94b2bc89b0"
}
```

### GET `/polls/:pollId`

Retorno da informação da enquete solicitada.

#### Resposta
`HTTP 200 OK`

```json
{
	"poll": {
		"id": "e4365599-0205-4429-9808-ea1f94062a5f",
		"title": "Qual a melhor linguagem de programação?",
		"options": [
			{
				"id": "4af3fca1-91dc-4c2d-b6aa-897ad5042c84",
				"title": "JavaScript",
				"score": 1
			},
			{
				"id": "780b8e25-a40e-4301-ab32-77ebf8c79da8",
				"title": "Java",
				"score": 0
			},
			{
				"id": "539fa272-152b-478f-9f53-8472cddb7491",
				"title": "PHP",
				"score": 0
			},
			{
				"id": "ca1d4af3-347a-4d77-b08b-528b181fe80e",
				"title": "C#",
				"score": 0
			}
		]
	}
}
```

### POST `/polls/:pollId/votes`

Registrar um voto de uma enquete específica.

#### Corpo da requisição

```json
{
  "pollOptionId": "31cca9dc-15da-44d4-ad7f-12b86610fe98"
}
```
\* Campo _pollOptionID_ é obrigatório.

## WebSockets

### ws `/polls/:pollId/results`

A cada voto registrado, a aplicação enviará uma mensagem com a informação do id da opção e a quantidade de votos referente a enquete específica.

#### Mensagem

```json
{
  "pollOptionId": "da9601cc-0b58-4395-8865-113cbdc42089",
  "votes": 2
}
```

## ✨ Tecnologia

- [TypeScript](https://www.typescriptlang.org/)
- [Fastify](https://fastify.dev/)
- [Prisma](https://www.prisma.io/)
- [Zod](https://zod.dev/)
- E muitas outras…

## 🛠️ Requisitos

- Docker;
- Node.js;


## 🚀 Como executar

### 1. Instalações prévias:
Instale o [Node.js] na versão 18.19.0 ou superior(https://nodejs.dev/)

Instale o [Docker](https://www.docker.com/)

### 2. Clone o projeto, instale as dependências e inicie o projeto

Clone o repositório:
```bash
git clone https://github.com/DarcioCarvalho/nlw-expert-nodejs-polls.git
```

Acesse a pasta do projeto:
```bash
cd nlw-expert-nodejs-polls
```

Instale as dependências do projeto:
```bash
npm install
```

Inicie o container do PostgreSQL e do Redis:
```bash
docker compose up -d
```

Inicie o servidor:
```bash
npm run dev
```

Pronto!!! A partir de agora você pode testar as requisições e funcionalidades mencionadas da aplicação. <br>
(Eu recomendo testar utilizando o [Hoppscotch](https://hoppscotch.io/) )



<!--START_SECTION:footer-->

<br />
<br />

## 📝 License

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---


<!--END_SECTION:footer-->
