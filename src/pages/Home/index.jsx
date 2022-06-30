import { useEffect, useState } from "react";

//components
import CharacterInfo from "../../components";

// Services
import { getCharacters } from "../../services/characters";

import "./Home.css";

export default function Home() {
  const [characters, setCharacters] = useState([]);

  // REQUEST A Rick and Morty API.
  useEffect(() => {
    const getCharactersQuery = async () => {
      const data = await getCharacters();
      console.log(data);
      setCharacters(data.results);
    };

    getCharactersQuery();
  }, []);

  const charactersUi = characters.map(({image,name,status,species,origin}, index) => (
    <div className="character-container" key={index}>
      <div className="img-container">
        <img src={image} alt="character" />
      </div>
      <CharacterInfo name={name} status={status} species={species} location={origin.name}/>
    </div>
  ));

  return <div className="characters-container-outer">{charactersUi}</div>;
}

// 1. Componente se Monta
// 2. Estado se define como []
// 3. Se renderiza
// 4. Se ejecuta el useEffect
// 5. Se ejecuta una petición al servidor y se espera
// 6. Con la respuesta del servidor, actualizamos el estado
// 7. Se renderiza el componente, pero ahora el state, tiene el valor
// del resultado del servidor
