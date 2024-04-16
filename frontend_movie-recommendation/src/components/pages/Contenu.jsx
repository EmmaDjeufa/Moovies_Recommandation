// Contenu.jsx
import React, { useState, useEffect } from "react"; 
import axios from "axios";
import 'aos/dist/aos.css';

export const Contenu = () => {

    const [movies, setMovies] = useState([]);
    const [userPreferences, setUserPreferences] = useState({});
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    
    useEffect(() => {
        // Charger les films populaires depuis l'API TMDb
        axios
        .get(
            "https://api.themoviedb.org/3/movie/popular?api_key=f35d6c8d1b4b8445385c5274ccfce88f&language=fr-FR&page=1"
        )
        .then((response) => {
            setMovies(response.data.results);
        })
        .catch((error) => {
            console.error("Erreur lors du chargement des films :", error);
        });
    }, []);

    const handlePreferenceChange = (event) => {
        const { name, value } = event.target;
        setUserPreferences({ ...userPreferences, [name]: value });
    };

    const handleRecommendation = () => {
        // Envoyer les préférences utilisateur à l'API TMDb pour recommander des films
        axios
        .get(
            `https://api.themoviedb.org/3/discover/movie?api_key=f35d6c8d1b4b8445385c5274ccfce88f&language=fr-FR&with_genres=${userPreferences.genre}`
        )
        .then((response) => {
            setRecommendedMovies(response.data.results);
        })
        .catch((error) => {
            console.error("Erreur lors de la recommandation de films :", error);
        });
    };

    return (
        <div className="App">
          <h1>Recommandation de films</h1>
          <div>
            <h2>Préférences utilisateur</h2>
            <p>Sélectionner votre genre préféré et cliquer sur "Recommander des films" pour afficher un ensemble de cette catégorie films</p>
            <label>
              Genre préféré...
              <select name="genre" onChange={handlePreferenceChange}>
                <option value="">Sélectionnez un genre</option>
                <option value="28">Action</option>
                <option value="35">Comédie</option>
                <option value="18">Drame</option>
              </select>
            </label>
            <button onClick={handleRecommendation}>Recommander des films</button>
          </div>
          <div>
            
            <ul>
              {recommendedMovies.map((movie) => (
                <li key={movie.id}>
                  <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                  <p>{movie.title}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Autres films populaires</h2>
            <ul>
              {movies.map((movie) => (
                <li key={movie.id}>
                  <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                  <p>{movie.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
    );
}

