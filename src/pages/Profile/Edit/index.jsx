
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { retrieve as retrieveUser } from "../../../services/users";

// CSS
import "./Edit.css";

export default function ProfileEdit() {
  // Local state
  const [user, setUser] = useState(null);

  // RRD
  const { id } = useParams();

  useEffect(() => {
    console.log("PRIMERA VEZ");
    const getUser = async () => {
      const data = await retrieveUser(id);
      setTimeout(() => {
        setUser(data);
      }, 2000);
      console.log(data);
    };
    getUser();
  }, []);

  console.log(id);

  return (
    <div>
      <h2>Detail</h2>
      {!user ? (
        <p>Loading</p>
      ) : (
        <div>
          <img src={user.photoURL} />
          <p>
            {user.firstName} {user.lastName}
          </p>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
}
