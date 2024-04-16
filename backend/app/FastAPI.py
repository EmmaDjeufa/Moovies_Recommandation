#fastAPI
from fastapi import FastAPI, Depends, HTTPException
from pydantic import BaseModel
from sqlalchemy.orm import Session
from database import SessionLocal, User, create_tables

app = FastAPI()

# Création des tables si elles n'existent pas
create_tables()

# Modèle de données pour représenter un utilisateur
class UserCreate(BaseModel):
    nom: str
    prenom: str
    email: str
    mot_de_passe: str
    adresse: str
    telephone: str
    type_de_film_prefere: str

# Fonction pour obtenir une session de base de données
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Endpoint pour ajouter un nouvel utilisateur à la base de données
@app.post("/users/")
async def create_user(user: UserCreate, db: Session = Depends(get_db)):
    db_user = User(**user.dict())
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

# Endpoint pour récupérer tous les utilisateurs
@app.get("/users/")
async def get_users(db: Session = Depends(get_db)):
    return db.query(User).all()
