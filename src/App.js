import { useEffect, useState } from "react";

//Components
import Title from "./components/Title";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const koders = [
    {
      firstName: "Luis",
      lastName: "Vera",
      age: 24,
      gender: "m",
      photoURL: "URL VALIDA",
      email: "luisvera@gmail.com",
    },
    {
      firstName: "Nestor",
      lastName: "Ramírez",
      age: 40,
      gender: "m",
      photoURL: "URL VALIDA",
      email: "nestorramirez@gmail.com",
    },
    {
      firstName: "David",
      lastName: "Romero",
      age: 28,
      gender: "m",
      photoURL: "URL VALIDA",
      email: "davidromero@gmail.com",
    },
    {
      firstName: "Yusef",
      lastName: "Lopéz",
      age: 40,
      gender: "m",
      photoURL: "URL VALIDA",
      email: "yuseflopez@gmail.com",
    },
  ];

  const animals = ["perro", "gato", "oso", "tortuga"];

  const animalsUI = animals.map((animal, index) => (
    <li key={index}> {animal} </li>
  ));

  const koderUi = koders.map((koder, index) => (
    <div className="koderUiLi" key={index}>
      <div className="avatarDiv">
        <div className="avatarImg"></div>
      </div>

      <div className="koderInfo">
        <div className="koderInfoCentered">
          {koder.firstName} {koder.lastName}
        </div>
        <div className="koderInfoCentered">
           Age:{koder.age}
        </div>
        <div className="koderInfoCentered">
           Email Adress: {koder.email}
        </div>
      </div>
    </div>
  ));

  const [count, setCount] = useState(0);

  const [light, setLight] = useState(false);

  const [highLighted, sethighLighted] = useState(false);

  const handleClick = (increase) => {
    let newCount = count;

    if (increase) {
      newCount = newCount + 1;
    } else {
      newCount = newCount - 1;
    }
    setCount(newCount);
    setLight(!light);
  };

  const handleLight = () => {
    setLight(!light);
  };
  const handleLight2 = () => {
    setLight(!light);
  };

  //Argumento 1: Callback
  //Argumento 2: nada, [], [count]
  //Caso vacío: el call back del useEffect se ejecuta cada que algo cambie (estado)
  //Caso []: el callback del useEffect se ejecuta la primera vez que carga el componente
  //Caso [count]: el callback del useEffect se ejecuta la primera vez el estado se actualiza
  useEffect(() => {});

  return (
    <div className="App">
      {/* <header className="App-header">
        <Title firstName="Peter" lastName="Parker"></Title>
        <Title firstName="Rick" lastName="Sanchez"></Title>
        <h1>{count}</h1>
        <button onClick={() => handleClick(true)}>Click me to add</button>
        <button onClick={() => handleClick(false)}>Click me to reduce</button>

        <div
          className={light === true ? "on" : "off"}
          onMouseOver={() => {
            handleLight();
          }}
          onMouseLeave={() => {
            handleLight2();
          }}
        >
          {light === true ? "on" : "off"}
        </div>

        
      </header> */}

      {/* <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul> */}

      {/* <ul>{animalsUI}</ul> */}

      <div className="koderUl">{koderUi}</div>
    </div>
  );
}

export default App;
