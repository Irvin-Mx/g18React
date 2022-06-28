import "./CharacterInfo.css";

export default function CharacterInfo({name,status,species,location}) {
    return (
         <div className="info-div">
         <p><span className="info-div-Name">Name: </span>{name}</p>
         <p><span className="info-div-Name">Status: </span>{status}</p>
         <p><span className="info-div-Name">Species: </span>{species}</p>
         <p><span className="info-div-Name">Origin: </span>{location}</p>
       </div>
    )
}