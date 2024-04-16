#fastAPI
from fastapi import FastAPI
from pydantic import BaseModel
import psycopg2

app = FastAPI()

# Modèle de données pour représenter un utilisateur
class User(BaseModel):
    nom: str
    prenom: str
    email: str
    mot_de_passe: str
    adresse: str
    telephone: str
    type_de_film_prefere: str

# Connexion à la base de données(MyProject)
conn = psycopg2.connect(
    dbname="users",  # Nom de votre base de données
    user="emmaProj_archMICserv",
    password="emma1234*",
    host="localhost"
)

# Endpoint pour ajouter un nouvel utilisateur à la base de données
@app.post("/users/")
async def create_user(user: User):
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO users (nom, prenom, email, mot_de_passe, adresse, telephone, type_de_film_prefere) VALUES (%s, %s, %s, %s, %s, %s, %s)",
        (user.nom, user.prenom, user.email, user.mot_de_passe, user.adresse, user.telephone, user.type_de_film_prefere)
    )
    conn.commit()
    cursor.close()
    return {"message": "Utilisateur ajouté avec succès"}

# Endpoint pour récupérer tous les utilisateurs
@app.get("/users/")
async def get_users():
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users")
    users = cursor.fetchall()
    cursor.close()
    return users

