import React from "react"
import { social } from "../data/dummydata"

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        {social.map((item, index) => (
          /*eslint-disable react/jsx-key*/
          <a key={index} href={item.url} target="_blank" rel="noopener noreferrer" data-aos='zoom-in'> {/* Ouvre le lien dans un nouvel onglet */}
            {item.icon}
          </a>
        ))}
        <p data-aos='zoom-in'>Tout droits réservés 2024</p>
      </footer>
    </>
  )
}

export default Footer
