import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Test from './pages/Test';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Home from './pages/Home';

// context
import { UserContext } from './context/UserContext';
import { useEffect, useMemo, useState } from 'react';

//axios
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true; //not to include every time again.

function App() {

  const [user, setUser] = useState(null);
  const providerValue = useMemo(() => ({ user, setUser}), [user, setUser]);

  useEffect(() => {
    if (!user){
      axios.get('users/profile')
      .then(({data}) => {
        setUser(data);
      });
    }
  }, [])

  return (
    <div className="App">
      <header>
        
        <BrowserRouter>
          <UserContext.Provider value={providerValue}>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/profile/' element={<Profile />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/test' element={<Test />} />
            {/* <Route path='/profile/' element={<Profile />} /> */}
            <Route path='/' element={<Home />} />
            
          
          </Routes>
          </UserContext.Provider>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
