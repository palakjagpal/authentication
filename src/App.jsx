import Navbar from './Navbar';
import { BrowserRouter, Routes, Route}  from 'react-router-dom';
import User_Login from './User_Login';
import User_Register from './User_Register';
import Profile from './Profile';
import Home from './Home';

function App() {

  return (
    <>
      <BrowserRouter>

      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<User_Login/>} />
          <Route path="/register" element={<User_Register/>} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
