import React from 'react';
import { useNavigate } from 'react-router-dom'

function Sign(){

    const navigate = useNavigate();

    function Eventsp(){
        navigate("/event")
    }

    function handleClick(){
        navigate("/register")
    }

    return(
        <div className='container'>
        <div className='signin'>
            <h1 id='header'>WorkXP!</h1>

            <form>
            <label>
            <input type="text" id='student' name="email" placeholder='Email' />
            </label> <br></br>
             <label>
            <input type="password" id='student' name="password" placeholder='password' />
            </label> <br></br>

            <button onClick={Eventsp} id='signin'>SIGN IN</button>
            <h4>New user?</h4>

            <button onClick={handleClick} id='signin'>CREATE ACCOUNT</button>

            </form>
        </div>
        </div>
    )
}

export default Sign;