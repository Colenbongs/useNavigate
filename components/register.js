import React, {useRef, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom'


function Register(){

    const navigate = useNavigate();

    function Success(){
        navigate("/success")
    }

    const videoRef = useRef(null);
    const photoRef = useRef(null);

    const [ hasphoto, setHasPhoto] = useState(false);

    const getVideo = () => {
        navigator.mediaDevices.getUserMedia({ video: {width: 200, height:110, }})
         .then(stream => {
            let video = videoRef.current;
            video.srcObject = stream;
            video.play();
         })
         .catch(err => {
            console.error(err)
         })
    }

    const takePhoto = () => {
        const width = 200;
        const height = width/(16/9);

        let video = videoRef.current;
        let photo = photoRef.current;

        photo.width = width;
        photo.height = height;

        let ctx = photo.getContext('2d');
        ctx.drawImage(video, 0, 0, width, height);

        setHasPhoto(true);
    }

    const closePhoto = () => {
        let photo = photoRef.current;
        let ctx = photo.getContext('2d');

        ctx.clearRect(0, 0, photo.width, photo.height);
        setHasPhoto(false);
    }

    useEffect(() =>{
        getVideo();
    }, [videoRef])

    return(
        <div className='container'>
    
        <div className='register'>
            <h1 id='header'>CREATE NEW ACCOUNT</h1>

            <div className='webcam'>

            <video ref={ videoRef}></video>
            <button id='cambtn' onClick={takePhoto}>CAPTURE PIC!</button>
            </div>

            <div className={'result' + (hasphoto ? 'hasphoto' : ''
            )}>
                <canvas ref={photoRef}></canvas>
                <button id='cambtn' onClick={closePhoto}>DELETE!</button>
            </div>

            <form>
            <label>
            <input type="text" id='register' name="firstName" placeholder='First Name' />
            </label> <br></br>
            <label>
            <input type="text" id='register' name="Name" placeholder='Last Name' />
            </label> <br></br>
            <label>
            <input type="email" id='register' name="email" placeholder='Email Address'/>
            </label> <br></br>
            <label>
            <input type="number" id='register' name="number" placeholder='Phone Number'/>
            </label> <br></br>
            <label>
            <input type="password" id='register' name="password" placeholder='Password' />
            </label> <br></br>
             <label>
            <input type="text" id='register' name="password" placeholder='Confirm Password'/>
            </label> <br></br>

            <button onClick={Success} id='signup'>SIGN UP</button>

            </form>
        </div>
        </div>
    )
}

export default Register;