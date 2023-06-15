//import React,{useState} from 'react';
import './App.css';
// import Popup from './Components/signup.js';
//  import Signup from './Components/signup.js';
// import LoginPage from './Components/signup.jsx';
//   import CowCare from './Components/cow care.js';
 import Homepage from './Components/homepage.jsx';
//  import Effects from './Components/effects.jsx';
//  import DoctorDetails from './Components/doctordetails.js';
function App() {
    //const[isOpen,setIsOpen]=useState(false);
    
    return(
        <div>
            {/* <DoctorDetails/>  */}
             {/* <Effects/> */}
               {/* <CowCare/>    */}
             <Homepage /> 
             {/* <Signup />  */}
            {/* <LoginPage />   */}
            // {/* ({!isOpen ?  <Signup /> : <LoginPage/> }); */}
            // {/* ({setIsOpen ? <LoginPage/>:<Signup /> }) */}
        </div>
    );
}
export default App;


