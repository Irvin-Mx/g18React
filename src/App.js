import { Routes, Route } from "react-router-dom";
import "./App.css";

// Containers
import AppContainer from "./containers/AppContainer";
import ProfileContainer from "./containers/ProfileContainer";

// Components
import About from "./pages/About";
import Home from "./pages/Home";
import ProfileDetail from "./pages/Profile/Detail";
import ProfileEdit from "./pages/Profile/Edit";
import ProfileCreate from "./pages/Profile/Create";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<p>Landing page</p>} />
        <Route path="login" element={<p>Login</p>} />
        <Route path="signup" element={<p>Signup</p>} />
        <Route path="app" element={<AppContainer />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="profile" element={<ProfileContainer />}>
            <Route path=":id" element={<ProfileDetail />} />
            <Route path="edit" element={<ProfileEdit />} />
            <Route path="edit/:id" element={<ProfileEdit />} />
            <Route path="create" element={<ProfileCreate />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;