import { Outlet, Link } from "react-router-dom";
// import "./AppContainer.css";

export default function ProfileContainer() {
  return (
    <div>
      <nav>
        <Link to="">Details</Link>
        <Link to="">Edit</Link>
      </nav>
      <Outlet />
    </div>
  );
}