import { useContext, useState } from "react"
import Navbar from "../components/Navbar"
import axios from 'axios';
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false);
    
    const {setUser} = useContext(UserContext);

    async function handleLogin(e){
        e.preventDefault();
        try{
            const { data } = await axios.post('/users/login', {email, password});
            setUser(data);
            setRedirect(true);
            alert('login successful')
        } catch {
            alert('login failed')
        }
    }

    if (redirect) {
        return <Navigate to={'/profile'}/>
    }

    return (
        <>
            <Navbar />
            <container>
                
                
                <form className="content-box" onSubmit={handleLogin}>
                    <div>Sign in to your account</div>
                    <div><input type="text" name="" placeholder="name@company.com"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    </div>
                    <div>
                    <input type="password" placeholder="********"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    </div>
                    <div><label>Remember me</label></div>
                    <div><label>Forgot password?</label></div>
                    <button >Sign in</button>
                    <label>Don't have account yet? sign up</label>
                </form>
            </container>
        </>
        
    )
}