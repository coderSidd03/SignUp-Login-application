import './App.css';
import { Route, Routes } from 'react-router-dom';
import axios from "axios";
import Home from './pages/home/Home';
import LoginPage from './pages/Login/LoginPage';
import SignUpPage from './pages/signup/SignUpPage';
import Nothing from './pages/Nothing/Nothing';
import { UserContextProvider } from './contexts/UserContext';


// axios.defaults.baseURL = 'http://localhost:5000/api'
// axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000/api'
// axios.defaults.withCredentials = true;



function App() {
  return (
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Home path='home' />} />
          <Route path="/login" element={<LoginPage path='login' />} />
          <Route path="/register" element={<SignUpPage path='register' />} />
          <Route path="*" element={<Nothing/>} />
        </Routes>
      </UserContextProvider>

  );
}

export default App;
