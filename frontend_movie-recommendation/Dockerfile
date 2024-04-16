# Utiliser une image de base pour Node.js
FROM node:16-alpine

# Copier le contenu du répertoire actuel dans le conteneur
COPY . /app

# Définir le répertoire de travail
WORKDIR /app

# Installer nvm (Node Version Manager)
RUN wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

# Activer nvm dans le shell interactif
RUN export NVM_DIR="$HOME/.nvm" && \
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && \
    [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" && \
    nvm install v20 && \
    nvm use v20

# Installer les dépendances du frontend
RUN npm install

# Commande pour exécuter l'application ReactJS (serveur de développement)
CMD ["npm", "start"]


