import React,{useEffect,useState} from 'react'
import './DisplayUser.css'
import axios from 'axios'
import Table from './Table/Table'

function DisplayUser(){
    const [tableContent,setTableContent] = useState([])
    const fetchData = function(){
        axios.get('https://listify-server.herokuapp.com/getUser',{
            headers:{
                'x-auth-token': localStorage.getItem('token')
            }
        })
        .then((res)=>{
            setTableContent(res.data)
            console.log(res)
        })
        .catch((err)=>{
            if(err.response.status===401) {localStorage.removeItem('token')}
            console.log(err)
        })
    }
    useEffect(()=>{
        fetchData()
    },[])
    const deleteUser = function(index){
        const data = {id:tableContent[index]._id}
        axios.post('https://listify-server.herokuapp.com/deleteUser',data,{
            headers:{
                'x-auth-token': localStorage.getItem('token')
            }
        })
        .then((res)=>{
            fetchData()
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
        console.log(tableContent[index])
    }
    return(
        <div>
            <div className='displayuser-container'>
                <Table tableContent={tableContent} deleteUser={(index)=>deleteUser(index)}></Table>
            </div>
        </div>
    )
}
export default DisplayUser