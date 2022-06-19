import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import BeasiswaPage from './pages/BeasiswaPage';
import FormBeasiswa from './pages/FormBeasiswa';

function App() {
  return (
    <>
      <Router>
        <FormBeasiswa/>
      </Router>
    </>
  );
}

export default App;
