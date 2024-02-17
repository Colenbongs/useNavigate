import React from 'react'
import { FaBars, FaRegUserCircle } from "react-icons/fa";

function Events(){

    return(
        <div className='Events'>
        <div className='events'>
            <button>< FaBars/></button>
            <p>< FaRegUserCircle size="9em"/></p>

            <button id='profile'>Description</button> <br></br>
            <button id='profile'>Projects</button> <br></br>
            <button id='profile'>Contact</button> <br></br>
            <button id='profile'>Social Media</button> 
        </div>
        </div>
    )
}

export default Events;