import React from 'react';
import './doctordetails.css'
function DoctorDetails(){
    return(
        <div>
            <div className='backgroundImage'>
                        <div className='container'>
                            <h2 id='logo'>Savecows</h2>
                            <h2 className='Home'>Home</h2>
                            <h2 className='careCow'>Carecow</h2>
                            <h2 className='MediSymCare'>Effects</h2>
                            <h2 className='DocConnect'>Doctordetails</h2> 
                            <h2 className='signUp'>Signup</h2>
                            <h2 className='profile'>Profile</h2>
                        </div>
            </div>
            <div className='fullDiv'>
                  <div id='first'>
                        <h1>The best doctor in the world is the veterinarian. They can't ask their patients what's the matter. They've just got to know.</h1>
                        <button className='find'>find Doctor</button>
                  </div>
                  <div id='second'>
                         <img src='/resources/veternaryDoctor.jpg' alt='no image' className='veternaryDoctor'/>   
                  </div>

            </div>  
            <div>
                <div className='doctor'>
                    <div className='firstBlock'>
                        <img src={'/resources/cow.jpg'} alt="no image" className='image'/>
                        <h2>doctor Details</h2>
                        <button className='button'>know More</button>
                    </div>
                </div>
            </div>
            
        </div> 
    )
}
export default DoctorDetails;