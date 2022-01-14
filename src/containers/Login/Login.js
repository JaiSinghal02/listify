import React,{useState} from 'react'
import './Login.css'
import axios from 'axios'
import {withRouter,Redirect} from 'react-router-dom'
import LoginForm from '../../components/LoginForm/LoginForm'
import Error from '../../components/UI/Modal/Error/Error'

function Login(props){
    const [loginInfo,setLoginInfo] = useState({email:"",password:""})
    const [showError,setShowError] = useState(0)
    if(localStorage.getItem('token')){
        return <Redirect to="/dashboard"/>
    }
    const login = function(){
        axios.post('https://listify-server.herokuapp.com/login',{
            email:loginInfo.email,
            password: loginInfo.password
        })
        .then((res)=>{
            const token = res.data.token
            localStorage.setItem("token",token)
            props.history.push('/dashboard')
            
        })
        .catch((err)=>{
            setShowError(0)
            setShowError(1)
            console.log(err.response.data)
        })
        console.log(loginInfo)
    }
    return(
        <div className='login-div'>
            <div className='login-container'>
                <LoginForm setLoginInfo={setLoginInfo} login={login}></LoginForm>
            </div>
            {showError!==0?<Error message="Invalid Credentials" time={2000}/>:null}
        </div>
    )
}

export default withRouter(Login)