 import React, { useState } from 'react';
//  import Diseases from "./Components/Diseases";
//  import Effects from './Components/effects';
 import Homepage from './Components/homepage.jsx';
 import SignUp from './Components/signup.js';
 import CowCare from './Components/cow care.js';
 import { Route,Routes } from 'react-router';
function App() {
  return (
    <div> 
        <Routes>
          <Route path='/home' Component={Homepage}/>
          <Route path='/signup' Component={SignUp}/>
          <Route path='/cowcare' Component={CowCare}/>
          {/* <Route path='/Diseases' Component={Diseases}/>  */}
          {/* <Route path='/effects' Component={Effects}/> */}
        </Routes>
    </div>
  );
}
export default App;


