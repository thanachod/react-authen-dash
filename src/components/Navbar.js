import { AppBar, Box, Button, IconButton, List, ListItem, ListItemButton, ListItemText, Stack, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link, Navigate } from "react-router-dom";
import Login from '../pages/Login';
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";

//import


export default function Navbar() {

    const {user, setUser} = useContext(UserContext);
    

    useEffect(() => {
        
    }, [])


    function navigateLogIn() {

        

        return <Navigate to={<Login />} />
    }

     async function handleLogout(e) {
        e.preventDefault();
        await axios.post('users/logout')
        setUser(null);
        
    }

    return (
        <>
            <nav>
                <div className="nav-container">
                    <div className="nav-logo">
                        <Link to={'/'}><img 
                         width={56} height={56}
                         color={"white"}
                        src="/cloud-svgrepo-com.svg"/></Link>
                    </div>
                    <ul className="nav-menu">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/dashboard'}>Dashboard</Link></li>
                        
                        {!user ? (
                            <>
                                <li><Link to={'/signup'}>Sign up</Link></li>
                                <li><Link to={'/login'}>Log in</Link></li>
                            </>
                        ) : (
                            <>
                                <li><Link to={'/profile'}>Profile</Link></li>
                                
                                <li><Link onClick={handleLogout}>Log out</Link></li>
                            </>
                        )}
                    </ul>
                </div>
            </nav>
            
            
        </>
    )
}