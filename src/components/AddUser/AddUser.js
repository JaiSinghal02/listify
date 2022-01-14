import React from 'react'
import './AddUser.css'

function AddUser(props){
    return(
        <div className='adduser-div'>
            <div className='adduser-field-div'>
                <div className='adduser-field-container'>
                    <div className='adduser-field-tag'><p>User Name</p></div>
                    <div className='adduser-field-input'><input onChange={(e)=>props.setUserData((prev)=>{return {...prev,userName: e.target.value}})}></input></div>
                </div>
            </div>
            <div className='adduser-field-div'>
                <div className='adduser-field-container'>
                    <div className='adduser-field-tag'><p>Mobile Number</p></div>
                    <div className='adduser-field-input'><input onChange={(e)=>props.setUserData((prev)=>{return {...prev,mobileNumber: e.target.value}})}></input></div>
                </div>
            </div>
            <div className='adduser-field-div'>
                <div className='adduser-field-container'>
                    <div className='adduser-field-tag'><p>Email</p></div>
                    <div className='adduser-field-input'><input onChange={(e)=>props.setUserData((prev)=>{return {...prev,email: e.target.value}})}></input></div>
                </div>
            </div>
            <div className='adduser-field-div'>
                <div className='adduser-field-container'>
                    <div className='adduser-field-tag'><p>Address</p></div>
                    <div className='adduser-field-input'><input onChange={(e)=>props.setUserData((prev)=>{return {...prev,address: e.target.value}})}></input></div>
                </div>
            </div>
            <div className='adduser-button-div'>
                <div className='adduser-button-container'>
                    <div className='adduser-button' onClick={props.submitForm}>
                        <p>Submit</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default AddUser