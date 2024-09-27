import { useState } from "react";
import Characters from "./Components/Characters.jsx";
import ImagenTF from "./assets/ImagenTransformer.jpeg";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();

    setCharacters(characterApi.results);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title"> Peliculas & Mas </h1>
        {characters ? (
          <Characters characters={characters} />
        ) : (
          <>
            <img src={ImagenTF} alt="Pelicula" className="img-home" />
            <button onClick={reqApi} className="btn-search">
              Buscar Peliculas
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
