import React from "react";
import { Heading } from "../common/Heading";

export const Connexion = () => {
  return (
    <>
      <div className='contact'>
        <div className='container'>
          <Heading title='Veuillez entrer vos informations de connextion en remplissant le formulaire ci-après :' />
          <div className='content flexsb'>
            <div className='right'>
              <form>
                <div className='flex'>
                  <input type='email' placeholder='Email' data-aos='flip-right' />
                  <input type='password' placeholder='Mot de passe' data-aos='flip-right' />
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