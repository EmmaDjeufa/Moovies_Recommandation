import React from "react";
import { Heading } from "../common/Heading";
import { Link } from "react-router-dom";

export const Profil = () => {

  return (
    <>
      <div className='contact'>
        <div className='container'>
          <Heading title='Bienvenue sur votre profil Recom_Films' />
          <Link to="/contenu">
                  <button data-aos='zoom-in-up'>
                    Retour
                  </button>
          </Link>
        </div>
      </div>
    </>
  );
}




