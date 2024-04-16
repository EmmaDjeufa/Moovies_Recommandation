# Utilisez une image de Python comme base
FROM python:3.8-slim

# Définition de l'argument d'environnement pour la base de données
ENV MYSQL_DATABASE=Recom_db
ENV MYSQL_USER=emmaProj_archMICserv
ENV MYSQL_PASSWORD=Emm@1234*
ENV MYSQL_HOST=localhost

# Copier les fichiers de votre application dans le conteneur
COPY . /app

# Définir le répertoire de travail
WORKDIR /app

# Installer les dépendances de l'application
RUN pip install --no-cache-dir -r requirements.txt

# Exécuter les scripts de création de la base de données
RUN python3.8 database.py

# Exposer le port sur lequel l'application FastAPI écoute
EXPOSE 8000

# Commande pour exécuter l'application FastAPI
CMD ["uvicorn", "fastapi:app", "--host", "0.0.0.0", "--port", "8000"]
