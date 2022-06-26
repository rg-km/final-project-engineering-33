import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import BeasiswaPage from "./pages/BeasiswaPage";
import ProfilePage from "./pages/ProfilePage";
import DonaturPage from "./pages/DonaturPage";
import DonaturDetail from "./pages/DonaturDetail";
<<<<<<< HEAD
import FormBeasiswa  from "./pages/FormBeasiswa";
import DetailBeasiswa from "./pages/DetailBeasiswa";
=======
import FormBeasiswa from "./pages/FormBeasiswa";
import DonaturProfile from "./pages/DonaturProfile";
import FormDonatur from './pages/Donatur/FormDonatur';
import ListPendaftar from "./pages/Donatur/ListPendaftar";
>>>>>>> 379209f5923ca17ed9a7b3167fee76f52fee9af3

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
<<<<<<< HEAD
          <Route exact path='/form' element={<FormBeasiswa />}></Route>
          <Route exact path='/donatur1' element={<DonaturDetail />}></Route>
          <Route exact path='/beasiswadetail' element={<DetailBeasiswa />}></Route>
=======
          <Route exact path='/formbeasiswa' element={<FormBeasiswa />}></Route>
          <Route exact path='/donatur1' element={<DonaturDetail />}></Route>
          <Route exact path='/donaturprofile' element={<DonaturProfile />}></Route>
          <Route exact path='/formdonatur' element={<FormDonatur />}></Route>
          <Route exact path='/pendaftar' element={<ListPendaftar />}></Route>
>>>>>>> 379209f5923ca17ed9a7b3167fee76f52fee9af3
        </Routes>
      </Router>
    </>
  );
}

export default App;
