import React from 'react'
import Logo from '../../assets/Logo.png'
import './LogoBar.css'

function LogoBar(){
    return(
        <div className='logoBar-div'>
            <div className='logoBar-container'>
                <img src={Logo} alt="Logo"/>
            </div>
            <div className='logoBarTag-div'>
                <div className='logoBarTag-container'>
                    <p>A smart way to manage user database</p>
                </div>
            </div>
        </div>
    )
}

export default LogoBar