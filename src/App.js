import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import AppContainer from "./containers/AppContainer";
import ProfileContainer from "./containers/ProfileContainer";

import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <div className="flex bg-slate-900 text-white text-xl ">
        <Link className="p-3" to="/">
          Home
        </Link>
        <Link className="p-3" to="/about">
          About
        </Link>
        <Link className="p-3" to="/profile">
          About
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<p>Landing page</p>} />
        <Route path="login" element={<p>Login</p>} />
        <Route path="signup" element={<p>Signup</p>} />
        <Route path="app" element={<AppContainer />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="profile" element={<ProfileContainer />}>
            <Route index element={<h1>Here is where you can view your profile and edit it </h1>} />
            <Route path="edit" element={<h1>You can edit your profile</h1>} />
            <Route path="view" element={<h1>You can edit your profile </h1>} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
