# database.py
# -*- coding: utf-8 -*-

from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Configuration de la base de données PostgreSQL
SQLALCHEMY_DATABASE_URL = "postgresql://emmaProj_archMICserv:emma1234*@localhost/users"  

# Création d'une instance de moteur SQLAlchemy
engine = create_engine(SQLALCHEMY_DATABASE_URL)

# Création d'une session SQLAlchemy
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base de données déclarative
Base = declarative_base()

# Modèle de données pour les utilisateurs
class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    nom = Column(String)
    prenom = Column(String)
    email = Column(String, unique=True, index=True)
    mot_de_passe = Column(String)
    adresse = Column(String)
    telephone = Column(String)
    type_de_film_prefere = Column(String)

# Création des tables dans la base de données
def create_tables():
    Base.metadata.create_all(bind=engine)

# Appel de la fonction pour créer les tables
create_tables()
