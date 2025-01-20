[![Twitter Badge](https://img.shields.io/badge/-@t__h__e__u-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/t_h_e_u)](https://twitter.com/t_h_e_u) 
[![Linkedin Badge](https://img.shields.io/badge/-matheusgbatista-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/matheusgbatista-3392bb153/)](https://www.linkedin.com/in/matheusgbatista/) 
[![MyWeb Badge](https://img.shields.io/badge/-t--heu.github.io-333?style=flat-square&link=https://t-heu.github.io/)](https://t-heu.github.io) 

# Model Backend - Boilerplate API em TS

Este é um boilerplate simples para o desenvolvimento de APIs utilizando **Node.js**, **Express** e **TypeScript**, com suporte ao carregamento de variáveis de ambiente e segurança básica.

## 🚀 Tecnologias utilizadas

- [Node.js](https://nodejs.org/) - Runtime para execução de JavaScript no servidor.  
- [Express](https://expressjs.com/) - Framework minimalista para construção de APIs.  
- [TypeScript](https://www.typescriptlang.org/) - Superset do JavaScript que adiciona tipagem estática.  
- [dotenv](https://www.npmjs.com/package/dotenv) - Gerenciamento de variáveis de ambiente.  
- [helmet](https://www.npmjs.com/package/helmet) - Middleware de segurança para proteger a API.  
- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev) - Execução e reinicialização automática durante o desenvolvimento.

## 📝 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **[Node.js](https://nodejs.org/)** (versão recomendada: 18.x ou superior)  
- **[npm](https://www.npmjs.com/)** (gerenciador de pacotes do Node.js)  

## 📦 Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/t-heu/Boilerplate_API.git
   cd Boilerplate_API
   ```

2. Instale as dependências do projeto:

   ```bash
   pnpm
   ```

3. Crie um arquivo `.env` na raiz do projeto e adicione suas configurações, por exemplo:

   ```env
   PORT=3333
   ```

   e logo depois configure seu Docker.

4. Execute
   
   ```bash
   pnpm run dev
   ```
A API estará disponível em: `http://localhost:3000`

## Scripts disponíveis

- **`pnpm run dev`** - Inicia o servidor em modo de desenvolvimento com recarga automática.  

## 🛠️ Estrutura de pastas

```
model_backend/
│-- node_modules/
│-- src/
│   ├── server.ts      # Arquivo principal do servidor
│   ├── routes/        # Definição das rotas da API
│   ├── controllers/   # Lógica de controle das rotas
│   ├── middlewares/   # Middlewares para processamento de requisições
│   ├── config/        # Configurações gerais, incluindo dotenv
│-- .env               # Variáveis de ambiente
│-- package.json       # Configurações e dependências do projeto
│-- tsconfig.json      # Configurações do TypeScript
│-- README.md          # Documentação do projeto
```

## 🐛 Problemas e Suporte

Caso encontre algum problema, sinta-se à vontade para abrir uma [issue](https://github.com/t-heu/Boilerplate_API/issues).

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
