import React, { useState } from "react";
import { Heading } from "../common/Heading";
import axios from "axios"; // Importez axios pour envoyer des requêtes HTTP

export const Connexion = () => {
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");

  const handleConnexion = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/login", {
        email,
        mot_de_passe: motDePasse,
      });
      console.log(response.data); 
    } catch (error) {
      console.error("Erreur de connexion :", error);
    }
  };

  return (
    <>
      <div className='contact'>
        <div className='container'>
          <Heading title='Veuillez entrer vos informations de connexion en remplissant le formulaire ci-après :' />
          <div className='content flexsb'>
            <div className='right'>
              <form onSubmit={handleConnexion}>
                <div className='flex'>
                  <input
                    type='email'
                    placeholder='Email'
                    data-aos='flip-right'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type='password'
                    placeholder='Mot de passe'
                    data-aos='flip-right'
                    value={motDePasse}
                    onChange={(e) => setMotDePasse(e.target.value)}
                  />
                </div>
                <button type='submit' data-aos='zoom-in-up'>
                  Envoyer
                </button>
                <button type='submit' href="/contenu" data-aos='zoom-in-up'>
                  Retour
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

