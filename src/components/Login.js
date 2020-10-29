import { Button } from '@material-ui/core'
import React from 'react'
import logo from "./logo.svg"
import "./Login.css"
import { auth, provider } from './firebase'

function Login() {
    const signIn= ()=>{
        auth.signInWithPopup(provider).catch((error)=>alert(error.message))
    }
    return (
        <div className="login">
            <div className="login_logo">
                <img src={logo} alt="Chatter"/>

            </div>
            <h2>CHATTER</h2>
            <Button onClick={signIn}>Sign In</Button>
            
        </div>
    )
}

export default Login
