import React from 'react'
import './LoginForm.css'
import LoginButton from './LoginButton/LoginButton'

function LoginForm(props){
    return(
        <div className='loginForm-div'>
            <div className='loginForm-head'><p>Login Form</p></div>
            <div className='loginForm-form-div'>
                <div>
                    <div className='loginForm-form-entry'>
                        <div className='loginForm-form-tag'><p>Email</p></div>
                        <div className='loginForm-form-input'><input onChange={(e)=>props.setLoginInfo((prev)=>{return {...prev,email: e.target.value}})}></input></div>
                    </div>
                </div>
                <div>
                    <div className='loginForm-form-entry'>
                        <div className='loginForm-form-tag'><p>Password</p></div>
                        <div className='loginForm-form-input'><input type="password" onChange={(e)=>props.setLoginInfo((prev)=>{return {...prev,password: e.target.value}})}></input></div>
                    </div>
                </div>
                <div>
                    <div className='loginForm-form-entry'>
                        <LoginButton login={props.login}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoginForm