import React, { useState } from 'react';
import './signup.css';


function SignUp() {
  const [isOpen, setIsOpen] = useState(false);
  function closePopup(){
    setIsOpen(false);
  }
  function submitButton(){
    setIsOpen(true);
   }
  const handlePopup = () => {
    let details=JSON.parse(localStorage.getItem("data")) || [];
    let firstName = document.querySelector(".first").value;
    let lastName = document.querySelector(".last").value;
    let phoneNumber = document.querySelector(".phone").value;
    localStorage.setItem("data",JSON.stringify([...details,{firstName,lastName,phoneNumber}]));

    setIsOpen(true);
  };

  return (
    <div className='signup-form'>
      <div className='signup-container'>
         <img src= {'/resources/cow.jpeg'} alt="no image" className='card-image' /> 
        <div className='text'></div>
      </div>
      <div className='signup-input'>
        <h1 className='sign'>signup</h1>
        <input type="text" placeholder='First Name' className='signup-label' /><br></br>
        <input type="text" placeholder='Last Name' className='last' /><br></br>
        <input type="number" placeholder='Phone Number' className='phone' /><br></br>
        <button className='signup-agree' onClick={handlePopup}>Send OTP</button>
        {isOpen && (
          <div id='main'>
                <div className='pop-up'>
                      <input type="text" ></input>
                      <input type="text" ></input>
                      <input type="text" ></input>
                      <input type="text" ></input>
                      <input type="text" ></input>
                      <input type="text" ></input>
                      <button id='button1' onClick={closePopup}>x</button>
                  </div>
                  <div>
                    <button className='submit' onClick={submitButton}>submit</button>
                  </div>
                </div>
        )}
        <h4 className='login'>Already a member? <span>login</span> </h4>
        <h3 className='enter'>Enter your details and start your journey with us.</h3>
        <p className='privacy'>By creating this account, you agree to our Privacy Policy & Cookie Policy.</p>
      </div>
    </div>
  );
}

export default  SignUp;
