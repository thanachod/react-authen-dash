import { BrowserRouter, Route, Routes } from "react-router-dom"
import Profile from "./Profile"
import Dashboard from "./Dashboard"
import Test from "./Test"
import Navbar from "../components/Navbar"
import { Button, Drawer, ListItem, ListItemButton, ListItemText } from "@mui/material"
import { useState } from "react"

export default function Home() {

    const [navState, setNavState] = useState(false);
    
    function toggleNav() {
        setNavState(!navState);
        console.log(navState);
    }

    return (
        <>
            

            <Navbar />
            
            <Drawer
            anchor="left"
            open={navState}
            onClick={toggleNav}
            onKeyDown={toggleNav}
            >
                {['Overview', 'Customers', 'Account'].map((text) => (
                    <ListItem key={text}>
                        <ListItemButton>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </Drawer>
        </>
    )
}