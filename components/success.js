import React from 'react';
import { useNavigate } from 'react-router-dom'

function Succes(){

    const navigate = useNavigate();

    function Homebtn(){
        navigate("/signin")
    }

    return(
        <div className='container'>
        <div className='success'>
            <h1>You have successfully registered now log in!</h1>
            <button onClick={Homebtn}>GO TO LOGIN</button>    
        </div>
        </div>
    )
}

export default Succes;