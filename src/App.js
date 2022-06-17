import { useEffect, useState } from "react";

//Components
import Title from "./components/Title";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [light, setLight] = useState(false);

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
  //Argumento 1: Callback
  //Argumento 2: nada, [], [count]
  //Caso vacío: el call back del useEffect se ejecuta cada que algo cambie (estado)
  //Caso []: el callback del useEffect se ejecuta la primera vez que carga el componente
  //Caso [count]: el callback del useEffect se ejecuta la primera vez el estado se actualiza
  useEffect(() => {});

  return (
    <div className="App">
      <header className="App-header">
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
        >
          {light === true ? "on" : "off"}
        </div>
      </header>
    </div>
  );
}

export default App;
