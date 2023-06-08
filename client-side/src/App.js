//import React,{useState} from 'react';
import './App.css';
//import Popup from './Components/signup.js';
 //import Signup from './Components/signup.js';
// import LoginPage from './Components/signup.jsx';
 import Homepage from './Components/homepage.jsx'
function App() {
    //const[isOpen,setIsOpen]=useState(false);

    return(
        <div>
            <Homepage />
            {/* <Signup /> */}
            {/* <LoginPage />  */}
            {/* ({!isOpen ?  <Signup /> : <LoginPage/> }); */}
            {/* ({setIsOpen ? <LoginPage/>:<Signup /> }) */}
        </div>
    );
}
export default App;


