import { create as createUser } from "../../../services/users";

import { useState } from "react";

import "./Create.css";

export default function ProfileCreate() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthDate] = useState("");

  const clearForm= () =>{
    setFirstName("")
    setLastName("")
    setPhotoUrl("")
    setEmail("")
    setBirthDate("")
  }

  //validar que campos estén llenos
  const isEmpty = (value) => !value  

  const handelSubmit =  async (event) =>{
    if(isEmpty(firstName) || 
    isEmpty(lastName) || 
    isEmpty(email)|| 
    isEmpty(photoUrl)|| 
    isEmpty(birthdate) ){
      return alert("All fields are required")
    }

    event.preventDefault()
    const data = {
      firstName,
      lastName,
      photoUrl,
      email,
      birthdate
    }
    try{
      await createUser(data)
      clearForm()
    }catch (error){
      console.log(error)
    }
    
  }

  return (
    <div>
      <h1>Create</h1>
      <form
        className="form-container"
        onSubmit={
          handelSubmit
        }
      >
        <label>First name</label>
        <input
          type="text"
          placeholder="First name here"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label>Last name</label>
        <input
          type="text"
          placeholder="Last name here"
          onChange={(e) => setLastName(e.target.value)}
        />
        <label>Photo</label>
        <input
          type="url"
          placeholder="Url here"
          onChange={(e) => setPhotoUrl(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Email here"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Birthdate</label>
        <input type="date" onChange={(e) => setBirthDate(e.target.value)} />
        <button className="bg-blue-800" type="submit">
          Send Information
        </button>
      </form>
    </div>
  );
}
