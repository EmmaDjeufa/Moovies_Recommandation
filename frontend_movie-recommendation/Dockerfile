# Utiliser une image de base pour Node.js
FROM node:16-alpine

# Copier le contenu du répertoire actuel dans le conteneur
COPY . /app

# Définir le répertoire de travail
WORKDIR /app

# Installer les dépendances du frontend
RUN npm install

# Construire l'application ReactJS
RUN npm run build

# Commande pour exécuter l'application ReactJS (serveur HTTP)
CMD ["npx", "serve", "-s", "build", "-l", "3000"]
