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
            <div className='image'>
                <h1 className='available'>Find a Available veternary doctors</h1>
                <h3 className='milk'>It doesn't matter how much milk you spill as long as <br>
                </br><h3 className='lose'>you don't lose the cow.</h3></h3>
                <div className='cow'>
                    <div className='emergency'>
                        <img src={'/resources/images.png'} alt="" className='doctor'/>
                        <h3 className='qualified'>Qualified Doctors</h3>
                        <p className='website'>The website employs qualified doctors who have completed the necessary education, training, and licensing to practice medicine. These doctors provide medical advice, consultations, and treatment services through the website.</p>
                    </div>
                    <div className='emergency2'>
                        <img src={'/resources/emergency.webp'} alt="" className='doctor'/>
                        <h3 className='qualified1'>Emergency Care</h3>
                        <p className='website1'>If you are in need of emergency veterinary care, the website has qualified veterinary doctors who are available to provide immediate assistance for your cow's medical needs.</p>
                    </div>
                    <div className='emergency3'>
                        <img src={'/resources/24hours.jpg'} alt="" className='doctor'/>
                        <h3 className='qualified'>24 hours services</h3>
                        <p className='website'>The website provides round-the-clock, 24-hour service, ensuring that qualified doctors are available at any time of the day or night. This means that you can access medical assistance for your cow at any hour, even during emergencies or outside of regular business hours, ensuring continuous care and support.</p>
                    
                    </div>
                    <div className='emergency4'>
                        <img src={'/resources/outdoor.jpg'} alt="" className='doctor'/>
                        <h3 className='qualified1'>outdoor Checkup</h3>
                        <p className='website1'>The website offers outdoor checkups where qualified doctors can visit your location to provide medical examinations or consultations for your cow in a comfortable and convenient environment outside of a traditional clinic setting.</p>
                    
                    </div>

                </div>
            </div>
              <div className='doctorPage'>
                <div>
                     <label for="area" className='area'>area :</label> 
                    <input type="text" id="area" className='input'placeholder='area' />
                    <button className='button'>search</button>
                </div>
                <div>
                    <h1 className='Available'>Available</h1>
                        <div className='doctorAvailable'>
                             <div className='veternary1'>
                                <img src={"/resources/veternary.jpeg"} alt="" className='doctor1'/>
                             </div>
                             <div className='details'>
                                <h1>name : stephen</h1>
                                <h1 className='phone'>phone No : 1234567890</h1>
                                <img src={"resources/phone.jpg"} alt="no" className='imag'/>
                                <img src={"resources/video.jpg"} alt="no" className='imag'/>
                                <img src={"resources/whatsapp.jpeg"} alt="no" className='imag'/>
                                <h2>Hours : 1hr</h2>
                             </div>
                             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.16105960729!2d78.61516887592514!3d13.152238787179993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad8349ce96bc9f%3A0x61696c120e613301!2sBellammadugu%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1686753548098!5m2!1sen!2sin"></iframe>
                        </div>
                        <div className='doctorAvailable'>
                             <div className='veternary1'>
                                <img src={"/resources/veternary2.jpeg"} alt="" className='doctor1'/>
                             </div>
                             <div className='details'>
                                <h1>name : stephen</h1>
                                <h1 className='phone'>phone No : 1234567890</h1>
                                <img src={"resources/phone.jpg"} alt="no" className='imag'/>
                                <img src={"resources/video.jpg"} alt="no" className='imag'/>
                                <img src={"resources/whatsapp.jpeg"} alt="no" className='imag'/>
                                <h2>Hours : 1hr</h2>
                             </div>
                             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.16105960729!2d78.61516887592514!3d13.152238787179993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad8349ce96bc9f%3A0x61696c120e613301!2sBellammadugu%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1686753548098!5m2!1sen!2sin"></iframe>
                        </div>
                        <div className='doctorAvailable'>
                             <div className='veternary1'>
                                <img src={"/resources/veternary3.jpeg"} alt="" className='doctor1'/>
                             </div>
                             <div className='details'>
                                <h1>name : stephen</h1>
                                <h1 className='phone'>phone No : 1234567890</h1>
                                <img src={"resources/phone.jpg"} alt="no" className='imag'/>
                                <img src={"resources/video.jpg"} alt="no" className='imag'/>
                                <img src={"resources/whatsapp.jpeg"} alt="no" className='imag'/>
                                <h2>Hours : 1hr</h2>
                             </div>
                             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.16105960729!2d78.61516887592514!3d13.152238787179993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad8349ce96bc9f%3A0x61696c120e613301!2sBellammadugu%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1686753548098!5m2!1sen!2sin"></iframe>
                        </div>
                        <h1 className='allDoctors'>ALL DOCTORS</h1>
                        <div className='doctorAvailable'>
                             <div className='veternary1'>
                                <img src={"/resources/veternary5.jpeg"} alt="" className='doctor1'/>
                             </div>
                             <div className='details'>
                                <h1>name : stephen</h1>
                                <h1 className='phone'>phone No : 1234567890</h1>
                                <img src={"resources/phone.jpg"} alt="no" className='imag'/>
                                <img src={"resources/video.jpg"} alt="no" className='imag'/>
                                <img src={"resources/whatsapp.jpeg"} alt="no" className='imag'/>
                                <h2>Hours : 1hr</h2>
                             </div> 
                              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.16105960729!2d78.61516887592514!3d13.152238787179993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad8349ce96bc9f%3A0x61696c120e613301!2sBellammadugu%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1686753548098!5m2!1sen!2sin"></iframe>
                        </div>
                        <div className='doctorAvailable'>
                             <div className='veternary1'>
                                <img src={"/resources/veternary3.jpeg"} alt="" className='doctor1'/>
                             </div>
                             <div className='details'>
                                <h1>name : stephen</h1>
                                <h1 className='phone'>phone No : 1234567890</h1>
                                <img src={"resources/phone.jpg"} alt="no" className='imag'/>
                                <img src={"resources/video.jpg"} alt="no" className='imag'/>
                                <img src={"resources/whatsapp.jpeg"} alt="no" className='imag'/>
                                <h2>Hours : 1hr</h2>
                             </div>
                              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.16105960729!2d78.61516887592514!3d13.152238787179993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad8349ce96bc9f%3A0x61696c120e613301!2sBellammadugu%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1686753548098!5m2!1sen!2sin"></iframe>
                        </div>
                        <div className='doctorAvailable'>
                             <div className='veternary1'>
                                <img src={"/resources/veternary9.jpeg"} alt="" className='doctor1'/>
                             </div>
                             <div className='details'>
                                <h1>name : stephen</h1>
                                <h1 className='phone'>phone No : 1234567890</h1>
                                <img src={"resources/phone.jpg"} alt="no" className='imag'/>
                                <img src={"resources/video.jpg"} alt="no" className='imag'/>
                                <img src={"resources/whatsapp.jpeg"} alt="no" className='imag'/>
                                <h2>Hours : 1hr</h2> 
                              </div>
                             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.16105960729!2d78.61516887592514!3d13.152238787179993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad8349ce96bc9f%3A0x61696c120e613301!2sBellammadugu%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1686753548098!5m2!1sen!2sin"></iframe>
                        </div>
                        <div className='doctorAvailable'>
                             <div className='veternary1'>
                                <img src={"/resources/veternary8.jpeg"} alt="" className='doctor1'/>
                             </div>
                             <div className='details'>
                                <h1>name : stephen</h1>
                                <h1 className='phone'>phone No : 1234567890</h1>
                                <img src={"resources/phone.jpg"} alt="no" className='imag'/>
                                <img src={"resources/video.jpg"} alt="no" className='imag'/>
                                <img src={"resources/whatsapp.jpeg"} alt="no" className='imag'/>
                                <h2>Hours : 1hr</h2>
                             </div>
                             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.16105960729!2d78.61516887592514!3d13.152238787179993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad8349ce96bc9f%3A0x61696c120e613301!2sBellammadugu%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1686753548098!5m2!1sen!2sin"></iframe>
                        </div>

                </div>
                
             </div>
            <footer>
                <div id='footer'>
                    
                </div>
            </footer> 
        </div>   
    )
}
export default DoctorDetails;