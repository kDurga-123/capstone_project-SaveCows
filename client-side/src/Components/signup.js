import React, { useState } from 'react';
import './signup.css';

function SignUp() {
  const [isOpen, setIsOpen] = useState(false);

  const handlePopup = () => {
    let firstName = document.querySelector(".first").value;
    let lastName = document.querySelector(".last").value;
    let phoneNumber = document.querySelector(".phone").value;
    console.log(firstName,lastName, phoneNumber);

    setIsOpen(true);



  };

  return (
    <div className='outline'>
      <div className='imageSection'>
        <img src="./cow.jpeg" alt="no image" className='image' />
        <div className='text'></div>
      </div>
      <div className='signup'>
        <h1 className='sign'>signup</h1>
        <input type="text" placeholder='First Name' className='first' /><br></br>
        <input type="text" placeholder='Last Name' className='last' /><br></br>
        <input type="number" placeholder='Phone Number' className='phone' /><br></br>
        <button className='button' onClick={handlePopup}>Send OTP</button>
        {isOpen && (
            <div>
          <div className='pop-up'>
                <input type="type" ></input>
                <input type="type" ></input>
                <input type="type" ></input>
                <input type="type" ></input>
                <input type="type" ></input>
                <input type="type" ></input>
            <div></div>
          </div> 
          </div>
        )}
       
        <h4 className='login'>Already a member?   login </h4>
        <h3 className='enter'>Enter your details and start your journey with us.</h3>
        <p className='privacy'>By creating this account, you agree to our Privacy Policy & Cookie Policy.</p>
      </div>
    </div>
  );
}

export default  SignUp;

