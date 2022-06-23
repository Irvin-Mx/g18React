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

  const [mxn, setMxn] = useState(null);
  const [usd, setUsd] = useState(null);

  const [ccNumber, setCcNumber] = useState(null);
  const [ccOwner, setCcOwner] = useState(null);
  const [ccValidDate, setccValidDate] = useState(null);
  const [ccCvv, setccCvv] = useState(null);

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
          : ` ${(mxn * 20.19).toFixed(2)} Mxn`}
      </h1>
      <input
        placeholder="Usd"
        value={mxn}
        onChange={(event) => {
          setMxn(event.target.value);
          setUsd(event.target.value * 20.19);
        }}
      />
      <input
        placeholder="Mxn"
        value={usd}
        onChange={(event) => {
          setUsd(event.target.value);
          setMxn(event.target.value / 20.19);
        }}
      />

      {/* Ejercicio: Credit card */}
      <div className="flex items-center w-full bg-slate-900 ">
        <div className="creditCardContainer bg-gradient-to-r from-cyan-500 to-blue-500 rounded flex flex-row justify-center m-5">
          <div className="flex flex-col justify-center w-11/12 h-100  items-center">
            <div className="flex items-center w-full justify-center h-1/3 ">
              <div className="flex w-full justify-between ">
                <img alt="chipImg" src="" />
                <p className="font-mono text-2xl font-bold text-white">Visa</p>
              </div>
            </div>

            <div className="flex w-full justify-center items-center h-1/3 ">
              <p className="ccNumberInfo   text-3xl underlinefont-extralight text-white w-full">
                {ccNumber}
              </p>
            </div>

            <div className="flex w-full  items-center justify-between h-1/3 ">
              <p className="ccOwnerInfo  text-white">{ccOwner}</p>
              <p className="ccValidThru  text-white">{ccValidDate}</p>
              <p className="ccValidThru  text-white">{ccCvv}</p>
            </div>
          </div>
        </div>

        {/* Labels and inputs container/START */}

        <div className=" flex flex-col creditCardInfo">
          <div>
            <label className="text-stone-400">Credit card number: </label>
            <input
              placeholder="Credit card number here"
              value={ccNumber}
              onChange={(event) => {
                setCcNumber(event.target.value);
              }}
            />
          </div>
          <div>
            <label className="text-stone-400">Credit card owner: </label>
            <input
              placeholder="Credit card owner name here"
              value={ccOwner}
              onChange={(event) => {
                setCcOwner(event.target.value);
              }}
            />
          </div>
          <div>
            <label className="text-stone-400">Valid thru date: </label>
            <input
              placeholder="Credit card valid thrue date"
              value={ccValidDate}
              onChange={(event) => {
                setccValidDate(event.target.value);
              }}
            />
          </div>
          <div>
            <label className="text-stone-400">CVC : </label>
            <input
              placeholder="Credit card CVC"
              value={ccCvv}
              onChange={(event) => {
                setccCvv(event.target.value);
              }}
            />
          </div>
        </div>

        {/* Labels and inputs container/START */}
      </div>
    </div>
  );
}

export default App;
