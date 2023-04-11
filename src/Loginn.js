
import React, { useState } from "react";
import "./Loginn.css";
import { Link, useHistory } from "react-router-dom";
import StoreIcon from '@mui/icons-material/Store';




export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  return (
    <div className='login'>
        <Link to="/" style={{textDecoration: "none"}} >
            <div className="login__logo">
                <StoreIcon className="login__logoImage" fontSize="large" />
                <h2 className="login__logoTitle">eShop</h2>
            </div>
        </Link>

        <div className="login__container">
            <h1>Sign-in</h1>

            <form>
                <h5>E-mail</h5>
                <input type="tex" value={email} onChange={e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <button type="submit" className="login__signInButton" >Sign In</button>
            </form>

            <button className="login__registerButton" >Create your Account</button>
        </div>
    </div>
  )
};
 
