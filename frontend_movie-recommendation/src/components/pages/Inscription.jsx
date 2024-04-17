/*Inscription.jsx*/
import React, { useState } from "react";
import axios from "axios";
import { Heading } from "../common/Heading";
import { Link } from "react-router-dom";

export const Inscription = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    mot_de_passe: "",
    adresse: "",
    telephone: "",
    type_de_film_prefere: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/users/", formData);
      alert("Utilisateur ajouté avec succès!");
      // Réinitialiser le formulaire après l'envoi réussi
      setFormData({
        nom: "",
        prenom: "",
        email: "",
        mot_de_passe: "",
        adresse: "",
        telephone: "",
        type_de_film_prefere: ""
      });
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
    }
  };

  return (
    <>
      <div className='contact'>
        <div className='container'>
          <Heading title='Vous voulez nous rejoindre? Ne surtout pas hésiter à remplir le formulaire ci-après :' />
          <div className='content flexsb'>
            <div className='right'>
              <form onSubmit={handleSubmit}>
                <div className='flex'>
                  <input type='text' name="nom" placeholder='*Nom' required value={formData.nom} onChange={handleChange} data-aos='flip-left' />
                  <input type='text' name="prenom" placeholder='*Prenom' required value={formData.prenom} onChange={handleChange} data-aos='flip-left' />
                </div>
                <div className='flex'>
                  <input type='email' name="email" placeholder='*Email' required value={formData.email} onChange={handleChange} data-aos='flip-right' />
                  <input type='password' name="mot_de_passe" placeholder='*Mot de passe' required value={formData.mot_de_passe} onChange={handleChange} data-aos='flip-right' />
                </div>
                <div className='flex'>
                  <input type='text' name="adresse" placeholder='Adresse Postale' value={formData.adresse} onChange={handleChange} data-aos='flip-right' />
                  <input type="tel" id="telephone" name="telephone" placeholder='Tel;Format : XXX-XXX-XXXX' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={formData.telephone} onChange={handleChange} />
                </div>
                <div className='flex'>
                  <select name="type_de_film_prefere" id="typeFilm" required value={formData.type_de_film_prefere} onChange={handleChange}>
                    <option value="">Sélectionner Votre type de films préférés en général</option>
                    <option value="Action">Action</option>
                    <option value="Comédie">Comédie</option>
                    <option value="Drame">Drame</option>
                  </select>
                </div>
                <Link to="/connexion">
                <button type="submit" data-aos='zoom-in-up'>Envoyer</button>
              </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

