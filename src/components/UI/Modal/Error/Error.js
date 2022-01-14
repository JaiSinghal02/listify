import React,{useState} from 'react'
import './Error.css'

function Error(props){
    const [style,setStyle] = useState('translateY(-60px)')
    setTimeout(()=>{
        setStyle('translateY(60px)')
    },props.time)
    return(
        <div className='error-div' style={{transform:style}}>
            <div  className='error-container'>
                <p className='error-msg'>{props.message}</p>
            </div>
        </div>
    )
}

export default Error