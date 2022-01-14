import React from 'react'
import './LoginButton.css'

function LoginButton(props){
    return(
        <div className='loginButton-div' onClick={props.login}>
            <div className='loginButton-container'>
                <p>Login</p>
            </div>
        </div>
    )
}

export default LoginButton