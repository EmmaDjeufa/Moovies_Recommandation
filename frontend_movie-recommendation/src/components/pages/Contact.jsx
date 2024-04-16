import React, { useState } from "react";
import { Heading } from "../common/Heading";
import { Link } from "react-router-dom";

export const Contact = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    sujet: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        // Gérer la réponse si nécessaire
        console.log("Message envoyé avec succès !");
      } else {
        console.error("Erreur lors de l'envoi du message.");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du message :", error);
    }
  };

  return (
    <>
      <div className='contact'>
        <div className='container'>
          <Heading title='Vous avez des recommandations ou des questions? Ne surtout pas hésiter à nous contacter via le formulaire ci-après :' />
          <div className='content flexsb'>
            <div className='right'>
              <form onSubmit={handleSubmit}>
                <div className='flex'>
                  <input type='text' name='nom' placeholder='Nom' value={formData.nom} onChange={handleChange} data-aos='flip-left' />
                  <input type='email' name='email' placeholder='Email' value={formData.email} onChange={handleChange} data-aos='flip-right' />
                </div>
                <input type='text' name='sujet' placeholder='Sujet' value={formData.sujet} onChange={handleChange} data-aos='flip-up' />
                <textarea name='message' placeholder='Message' value={formData.message} onChange={handleChange} data-aos='flip-down'></textarea>
                
                <Link to="/contenu">
                  <button type='submit' data-aos='zoom-in-up'>Envoyer</button>
                </Link>
              </form>
              <Link to="/contenu">
                  <button data-aos='zoom-in-up'>
                    Retour
                  </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

