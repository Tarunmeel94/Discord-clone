import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom';
import { login } from './features/userSlice'
import { auth, provider } from './firebase'
import { useDispatch, useSelector } from "react-redux";


const Login = () => {
    // const demologin={
    //     displayName:"Demo",
    //     email:"demo@gmial.com",
    
    // }
    const dispatch = useDispatch();
    const signIn = () => {
        // clever google login shizz...

        auth.signInWithPopup(provider).catch((err) => alert(err.message))
    }
    // const demoSignIn=()=>{
    //       dispatch(
    //         login({
    //             user:demologin,
    //         })
    //       )
    // }
    return (
        <div className='login' >
            <div className="login__logo">
                <img src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-logodownload-download-logotipos-1.png" alt="discord logo" />
            </div>
            <Button onClick={signIn}>Sign In</Button>
            {/* <Link to="/">
            <Button >Demo Sign In</Button>
            </Link> */}
        </div>
    )
}

export default Login
