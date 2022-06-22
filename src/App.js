// Components
import Card from "./components/Card";

import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  const [mxn, setMxn] = useState(0);
  const [usd, setUsd] = useState(0);

  const [koders, setKoders] = useState([
    {
      firstName: "Luis",
      lastName: "Vera",
      age: 24,
      gender: "m",
      photoURL: "https://sgame.etsisi.upm.es/pictures/18253.jpg?1621958969/",
    },
    {
      firstName: "Yusef",
      lastName: "Lopéz",
      age: 40,
      gender: "f",
      photoURL: "https://media4.giphy.com/media/5sYyfIMRcpJWNqdySh/giphy.gif",
    },
  ]);

  const kodersUI = koders.map(
    ({ firstName, lastName, age, gender, photoURL }, index) => {
      console.log(firstName);
      return (
        <Card
          key={index}
          photoURL={photoURL}
          firstName={firstName}
          lastName={lastName}
          age={age}
          gender={gender}
        />
      );
    }
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("AGREGAR KODER");
    const newKoders = [
      ...koders,
      {
        firstName,
        lastName,
        age,
        gender,
        photoURL,
      },
    ];

    setKoders(newKoders);

    setFirstName("");
    setLastName("");
    setAge("");
    setGender("");
    setPhotoURL("");
  };

  console.log(koders, "KODERS");

  return (
    <div className="App">
      <div className="main-container">
        <div className="container">{kodersUI}</div>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <input
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        <input value={age} onChange={(event) => setAge(event.target.value)} />
        <input
          value={gender}
          onChange={(event) => setGender(event.target.value)}
        />
        <input
          value={photoURL}
          onChange={(event) => setPhotoURL(event.target.value)}
        />
        <button type="submit">Agregar Koder</button>
      </form>
      <h1>
        {isNaN((mxn * 20.19).toFixed(2))
          ? "Numbers only please"
          : (mxn * 20.19).toFixed(2)}
      </h1>
      <input
        value={mxn}
        onChange={(event) => {
          setMxn(event.target.value);
          setUsd(event.target.value * 20.19);
        }}
      />
      <input
        value={usd}
        onChange={(event) => {
          setUsd(event.target.value);
          setMxn(event.target.value / 20);
        }}
      />
    </div>
  );
}

export default App;
