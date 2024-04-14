import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "../common/Footer"
import { Header } from "../common/Header"
import { Home } from "./Home"
import { Contenu } from "./Contenu"
import { Inscription } from "./Inscription"
import { Profil } from "./Profil"
import { Contact } from "./Contact"
import { Connexion } from "./Connexion"

export const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/contenu' element={<Contenu />} />
          <Route path='/inscription' element={<Inscription />} />
          <Route path='/profil' element={<Profil />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/connexion' element={<Connexion />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}
