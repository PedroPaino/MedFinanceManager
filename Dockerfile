# Especifica a imagem base
FROM node:16

# Define o diretório de trabalho no contêiner
WORKDIR /app

# Copia os arquivos de dependências e instala as dependências
COPY package*.json ./
RUN npm install

# Copia os arquivos do projeto para o diretório de trabalho no contêiner
COPY . .

# Expõe a porta que o servidor usará
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]
