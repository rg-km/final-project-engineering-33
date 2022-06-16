import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact component={LoginPage} />
          {/* <Route path='/daftar' component={Daftar} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
