import React from 'react'
import './Tab.css'

function Tab(props){
    return(
        <div className='tab-div'>
            <div className='tab-container' onClick={props.tabClick}>
                <p>{props.tabName}</p>
            </div>
        </div>
    )
}

export default Tab