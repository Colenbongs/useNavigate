import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home(){

    const navigate = useNavigate();

    function Homebtn(){
        navigate("/signin" )
    }

    return(
        <div className='container'>    
        <div className='homebtn'>
        <h1>Welcome!</h1>
          <button id='homebtn' onClick={Homebtn}>STUDENT</button> <br></br>
          <button id='homebtn' onClick={Homebtn}>FACULTY</button> <br></br>
          <button id='homebtn' onClick={Homebtn}>STAFF</button>
        </div>
        </div>
    )
}

export default Home;