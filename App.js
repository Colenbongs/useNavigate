import React from 'react';
import Home from './components/Home';
import Sign from './components/signin';
import Register from './components/register';
import Events from './components/event';
import Succes from './components/success';
import { Route, Routes} from 'react-router-dom';


function App(){

  return(
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<Sign/>} /> 
        <Route path="/register" element={<Register/>} />
        <Route path="/event" element={<Events/>} />
        <Route path='/success' element={<Succes/>} />
      </Routes>
    </div>
  )
}

export default App;