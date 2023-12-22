import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from 'axios';

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    
  }, [])

  

  function handleSignUp(e) {
    e.preventDefault();
    
    try {
      axios.post('/users/signup', {
        firstName,
        lastName,
        email,
        password
      }).then(()=> setRedirect(true))
    } catch {
      alert('sign up failed')
    }
  }

  if (redirect) {
    return <Navigate to={'/login'}/>
}

  return (
    <>
      <Navbar />
      <container>
        <form className="content-box" onSubmit={handleSignUp}>
          <div>
            <label>Sign up</label>
          </div>
          <div>
            <input
              type="text"
              name=""
              placeholder="first name"
              onChange={(e) => setFirstName(e.target.value)}
              
            />
          </div>
          <div>
            <input
              type="text"
              name=""
              placeholder="last name"
              onChange={(e) => setLastName(e.target.value)}
              
            />
          </div>
          <div>
            <input
              type="text"
              name=""
              placeholder="name@company.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label>remember me</label>
            <label>Forgot password?</label>
          </div>
          <button>Sign up</button>
          <div>
            <label>already have an account? Sign in</label>
          </div>
        </form>
      </container>
    </>
  );
}
