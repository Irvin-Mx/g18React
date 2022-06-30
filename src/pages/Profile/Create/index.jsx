import { postCharacter} from "../../../services/characters";

import { useState } from "react";

import "./Create.css";

export default function ProfileCreate() {
   const [name, setName] = useState("");
   const [lastName, setLastName] = useState("");
   const [email, setEmail] = useState("");
   const [age, setAge] = useState("");

  return (
    <form
      className="form-container"
      onSubmit={(e) => {
        e.preventDefault()
        postCharacter(name,lastName)
      }}
    >
      <label>First name</label>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <label>Last name</label>
      <input type="text" onChange={(e) => setLastName(e.target.value)} />
      <label>Email</label>
      <input type="text" onChange={(e) => setEmail(e.target.value)} />
      <label>Age</label>
      <input type="text" onChange={(e) => setAge(e.target.value)} />
      <button className="bg-blue-800" type="submit">
        Send Information
      </button>
    </form>
  );
}
