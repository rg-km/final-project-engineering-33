import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import BeasiswaPage from "./pages/BeasiswaPage";
import ProfilePage from "./pages/ProfilePage";
import DonaturPage from "./pages/DonaturPage";
import DonaturDetail from "./pages/DonaturDetail";
import FormBeasiswa from "./pages/FormBeasiswa";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/beasiswa' element={< BeasiswaPage />}></Route>
          <Route exact path='/donatur' element={<DonaturPage />}></Route>
          <Route exact path='/profile' element={<ProfilePage />}></Route>
          <Route exact path='/login' element={<LoginPage />}></Route>
          <Route exact path='/formbeasiswa' element={<FormBeasiswa />}></Route>
          <Route exact path='/donatur1' element={<DonaturDetail />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
