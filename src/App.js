import Register from "./components/Register";
import Profile from "./components/Profile";
import FourZeroFour from "./components/404";
import { BrowserRouter, Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import { useState } from "react";
import LandingPage from "./components/LandingPage";



function App() {
  const [username, setUsername] = useState('')
  const user=window.localStorage.getItem('user');
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/register" element={<Register setUsername={setUsername}/>} />
      <Route path="/login" element={<Login setUsername={setUsername}/>} />
      { user && <Route path="/home" element={<Home prop={username}/>} />}
      {user && <Route path="/profile" element={<Profile username={username}/>} />}
      <Route path="/*" element={<FourZeroFour/>} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
