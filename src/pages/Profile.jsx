import {
  Card,
  TextField,
  Button,
  Typography,
  Avatar,
  Divider,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";
import axios from "axios";

export default function Profile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [userDoc, setUserDoc] = useState({});
  const {user} = useContext(UserContext);

  

  useEffect(() => {
    
    
    // console.log(user.id);
    // axios.get(`/users/profile/${user.id}`)
    // .then((response) => {
    //   setUserDoc(response.data)
      // console.log(response.data);
    // })
    // .then((result) => {
    //   console.log(result);
    // })
    try {
      
      axios.get(`/users/profile/${user.id}`)
      .then((response) => {
        
        setFirstName(response.data.first_name);
        setLastName(response.data.last_name);
        setEmail(response.data.email);
        setPhone(response.data.phone_number);
      })
      
    } catch {
      alert('fail to get user profile')
    }
    
  }, []);

  


  return (
    <>
      <Navbar />
      <div className="profile-grid">
        <div className="content-box profile-account">
          <div className="header">account</div>
          <div className="profile-account-items">
            <div>
              <Avatar
                sx={{
                  bgcolor: "deepskyblue",
                  width: 56,
                  height: 56,
                }}
              >
                R
              </Avatar>
            </div>
            <div>
              <label className="profile-name">
                {firstName} {lastName}
              </label>
            </div>
          </div>
          <hr />
          <div>upload picture</div>
        </div>
        <div className="content-box">
          <label className="header">Profile</label>
          <div>
            <div>
              <input value={firstName}
              onChange={(e) => setFirstName(e.target.value)} 
              placeholder="First Name" />
              <input value={lastName} 
              onChange={(e) => setLastName(e.target.value)} 
              placeholder="Last Name" />
            </div>
            <div>
              <input value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Email" />
              <input value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              placeholder="Phone number" />
            </div>
          </div>
          <div>
            <button>Reset</button>
            <button>Save</button>
          </div>
        </div>
      </div>
    </>
  );
}
