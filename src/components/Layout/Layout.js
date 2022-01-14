import React from 'react'
import LogoBar from '../LogoBar/LogoBar'
import './Layout.css'

function Layout(props){
    return(
        <>
        
        <LogoBar></LogoBar>
        <div className='layout-content-div'>{props.children}</div>
        </>
    )
}

export default Layout