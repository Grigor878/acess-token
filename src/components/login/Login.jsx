import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className="container">
            <form className='login__form'>
                <TextField
                    id="filled-login-input"
                    label="Login"
                    type="login"
                    autoComplete="current-login"
                />
                <br />
                <br />
                <TextField
                    id="filled-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />
                <br />
                <br />
                <Button variant="contained">Log-in</Button>
                <br />
                <br />
                <Button variant="outlined"><Link to="/access-token">Get access token</Link></Button>
            </form>
        </div>
    )
}

export default Login