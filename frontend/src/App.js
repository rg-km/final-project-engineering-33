import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import BeasiswaPage from "./pages/BeasiswaPage";
import FormBeasiswa from "./pages/FormBeasiswa";
import ProfilePage from "./pages/ProfilePage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="beasiswa" element={<BeasiswaPage />} />
            <Route path="formbeasiswa" component={<FormBeasiswa />} />
            <Route path="profile" component={<ProfilePage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
