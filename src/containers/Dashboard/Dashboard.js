import React,{useState} from 'react'
import './Dashboard.css'
import axios from 'axios'
import {withRouter,Redirect} from 'react-router-dom'
import Tab from '../../components/Tab/Tab'
import AddUser from '../../components/AddUser/AddUser'
import DisplayUser from '../../components/DisplayUser/DisplayUser'
import Error from '../../components/UI/Modal/Error/Error'

function Dashboard(props){
    const [tab,setTab] = useState(1)
    const [userData,setUserData] = useState({userName:"",mobileNumber:null,email:"",address:""})
    const [showError,setShowError] = useState(0)
    const [errorMsg,setErrorMsg] = useState('')
    if(!localStorage.getItem('token')){
        return <Redirect to="/"/>
    }

    const tabClick = function (tabValue){
        setTab(tabValue)
    }
    const submitForm = function(){
        axios.post('https://listify-server.herokuapp.com/addUser',userData,{
            headers:{
                'x-auth-token': localStorage.getItem('token')
            }
        })
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            if(err.response.status===401) {
                localStorage.removeItem('token');
                props.history.push('/')
            }
            setShowError(0)
            setShowError(1)
            let userNameError = err.response.data.userName===0?'User Name: No spaces and alpha numeric':''
            let emailError = err.response.data.email===0?'Email: Valid Email ':''
            let mobileNumberError = err.response.data.mobileNumber===0?'Mobile Number: 10 digits only':''
            if(userNameError!=='' && (emailError!=='' || mobileNumberError!=='')){
                userNameError+=', '
            }
            if(emailError!=='' && mobileNumberError!==''){
                emailError+=', '
            }
            setErrorMsg(`${userNameError}${emailError}${mobileNumberError}`)
            console.log(err.response.data)
        })
    }
    return(
        <div className='dashboard-div'>
            <div>
                <div className='dashboard-tab-container'>
                    <div className="dashboard-tab dashboard-tab-1">
                        <Tab tabName="Add User" tabClick={()=>tabClick(1)}/>
                    </div>
                    <div className="dashboard-tab dashboard-tab-2">
                        <Tab tabName="Display Users" tabClick={()=>tabClick(2)}/>
                    </div>
                </div>
            </div>
            <div className='dashboard-content-div'>
                {tab===1?<AddUser setUserData={setUserData} submitForm={submitForm}></AddUser>:
                <DisplayUser></DisplayUser>}
            </div>
            {showError!==0?<Error message={errorMsg} time={4000}/>:null}
        </div>
    )
}

export default withRouter(Dashboard)