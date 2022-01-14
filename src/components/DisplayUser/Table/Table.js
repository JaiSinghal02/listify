import React,{useState,useEffect} from 'react'
import './Table.css'
import DeleteImageIcon from '../../../assets/delete.png'

function Table(props){
    const deleteImage = <div className='table-delete-div'>
        <img className="table-delete-icon" src={DeleteImageIcon} alt="Delete"/>
    </div>
    return(
        <table style={{width: '100%'}}>
            <thead>
                <tr>
                    <th className='table-head table-number-head'>No</th>
                    <th className='table-head table-username-head'>User Name</th>
                    <th className='table-head table-mobile-head'>Mobile Number</th>
                    <th className='table-head'>Email</th>
                    <th className='table-head'>Address</th>
                    <th className='table-head table-delete-head'>Delete</th>
                </tr>
            </thead>
            <tbody>
                {props.tableContent.map((content,index)=>{
                            return(
                                <tr key={index} className='table-content-row'>
                                    <td className='table-content-data table-content-index'>{index+1}</td>
                                    <td className='table-content-data'>{content.userName}</td>
                                    <td className='table-content-data'>{content.mobileNumber}</td>
                                    <td className='table-content-data'>{content.email}</td>
                                    <td className='table-content-data'>{content.address}</td>
                                    <td className='table-content-data table-content-delete' onClick={(e)=>props.deleteUser(index)}>{deleteImage}</td>
                                </tr>
                            )
                        })}
            </tbody>
        </table>
    )
}

export default Table;