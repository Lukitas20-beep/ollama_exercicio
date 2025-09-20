# Ollama CLI (phi3:mini)

Aplicação simples em **Node.js** que se conecta à API do **Ollama** e envia prompts para o modelo **`phi3:mini`**, exibindo a resposta no console.

## 📌 Tecnologias usadas
- [Node.js](https://nodejs.org/) (v18+)
- [node-fetch](https://www.npmjs.com/package/node-fetch) para requisições HTTP
- [readline-sync](https://www.npmjs.com/package/readline-sync) para entrada do usuário

## 🔗 Endpoint usado
- **URL do Ollama**: `http://ollama.eastus.cloudapp.azure.com:11434/api/generate`
- **Modelo**: `phi3:mini`

## 📂 Estrutura do projeto
ollama-cli/
├─ index.js
├─ package.json
├─ package-lock.json
└─ README.md
📂 node_modules