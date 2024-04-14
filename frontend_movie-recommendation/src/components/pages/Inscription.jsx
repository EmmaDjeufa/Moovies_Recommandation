import React from "react";
import { Heading } from "../common/Heading";

export const Inscription = () => {
  return (
    <>
      <div className='contact'>
        <div className='container'>
          <Heading title='Vous voulez nous rejoindre? Ne surtout pas hésiter à remplir le formulaire ci-après :' />
          <div className='content flexsb'>
            <div className='right'>
              <form>
                <div className='flex'>
                  <input type='text' placeholder='Nom' data-aos='flip-left' />
                  <input type='text' placeholder='Prenom' data-aos='flip-left' />
                </div>
                <div className='flex'>
                  <input type='email' placeholder='Email' data-aos='flip-right' />
                  <input type='password' placeholder='Mot de passe' data-aos='flip-right' />
                </div>
                <div className='flex'>
                  <input type='text' placeholder='Adresse Postale' data-aos='flip-right' />
                  <input type="tel" id="telephone" placeholder='Format : XXX-XXX-XXXX' name="telephone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
                </div>
                <div className='flex'>
                  <select name="typeFilm" id="typeFilm" required>
                    <option value="">Sélectionner Votre type de films préférés en général</option>
                    <option value="Action">Action</option>
                    <option value="Comédie">Comédie</option>
                    <option value="Drame">Drame</option>
                  </select>
                </div>
                <button data-aos='zoom-in-up'>Envoyer</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

