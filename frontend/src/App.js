import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import BeasiswaPage from "./pages/BeasiswaPage";
import ProfilePage from "./pages/ProfilePage";
import DonaturPage from "./pages/DonaturPage";
import DonaturDetail from "./pages/DonaturDetail";

function App() {
  return (
    <>
      <Router>
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<Home />}>
            {/* <Route path="login" element={<LoginPage />} /> */}
            <Route path="beasiswa" element={<BeasiswaPage />} />
            <Route path="formbeasiswa" component={<FormBeasiswa />} />
            <Route path="profile" component={<ProfilePage />} />
            {/* <Route path="Donatur" component={<Donatur />} /> */}
          </Route>
=======
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/beasiswa' element={< BeasiswaPage />}></Route>
          <Route exact path='/donatur' element={<DonaturPage />}></Route>
          <Route exact path='/profile' element={<ProfilePage />}></Route>
          <Route exact path='/login' element={<LoginPage />}></Route>
          <Route exact path='/donatur1' element={<DonaturDetail />}></Route>
>>>>>>> 6aec007818a33623a77b32cf9b600533857f4903
        </Routes>
      </Router>
    </>
  );
}

export default App;
