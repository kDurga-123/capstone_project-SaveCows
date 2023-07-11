import React from 'react';
import './signup.css';
function loginButton(){
  let login=JSON.parse(localStorage.getItem("loginData")) || [];
  let mobile=document.querySelector(".mobile").value;
  localStorage.setItem("loginData",JSON.stringify([...login,{mobile}]))
    
}
function LoginPage(){
    return(
        <div className='container'>
              <div>
                <img src="cow.jpeg" alt="no image" className='cowImage'/>
              </div>
              <div >
                <h1 className='loginDetails'>login</h1>
                  <input type="text" placeholder='mobile Number' className='mobile'></input>
                  <button className='button' onClick={loginButton}>Submit</button>
                  <h4 className='login'>Already a member?   login </h4>
                    <h3 className='enter'>Enter your details and start your journey with us.</h3>
                    <p className='privacy'>By creating this account, you agree to our Privacy Policy & Cookie Policy.</p>
              </div>
        </div>
    )
}
export default LoginPage;
