from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

# Configuration de la base de données MySQL
DB_USERNAME = "emmaProj_archMICserv"
DB_PASSWORD = "Emm@1234*"
DB_HOST = "localhost"
DB_PORT = 3306
DB_NAME = "Recom_db"
SQLALCHEMY_DATABASE_URL = f"mysql+mysqlconnector://{DB_USERNAME}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"

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
