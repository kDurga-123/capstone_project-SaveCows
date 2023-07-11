import React from 'react';
import './cowCare.css';
import { Link } from 'react-router-dom';
function CowCare(){
    return(
        <div>
            {/* <div className='backgroudImage'> */}
            {/* <div className='backgroundImage'> */}
                        <div className='home-blog'>
                            <h2 id='logo'>savecows</h2>
                            <h2 className='Home'><Link to="/home">Home</Link></h2>
                            <h2 className='careCow'><Link to="/cowcare">CowCare</Link></h2>
                            <h2 className='MediSymCare'>effects</h2>
                            <h2 className='DocConnect'>doctordetails</h2> 
                            <h2 className='signUp'>signup</h2>
                            <h2 className='profile'>profile</h2>
                        </div>
                {/* </div> */}
            {/* </div> */}
            <div>
                <input type='text' placeholder='search......' className='input'/>
                <img src={"/resources/download.png"} alt='no logo' className='logo' /> 
                <div>
                    <h1 className='care'>How to Care?</h1>
                    <div className='shelter'>
                        <div className='first'>
                            <div className='image1'>
                                <img className='image2' src={"/resources/shelter.jpeg"} alt=''/>
                            </div>
                            <div className='text'>
                            <h2>Housing and Shelter</h2>
                                    <p>Provide a clean, well-ventilated, and spacious barn or shelter for cows to rest and seek
                                        protection from extreme weather conditions.<br></br>
                                        1.Ensure proper drainage and flooring that is comfortable,
                                        non-slippery, and easy to clean.<br></br>
                                        2.Adequate space should be provided for each cow to move around comfortably.<br></br> 
                                    </p> 
                            </div> 
                           
                            
                        </div>
                        <div id='button'>
                            <button className='explore'>explore</button>
                        </div>
                        <div className='Feeding'>
                            <div className='text1'>
                             <h2>Feeding and Watering:</h2>
                                    <p>Provide a balanced diet consisting of forage (grass or hay), concentrates (grains), protein-rich feed (such as soybean meal), and mineral supplements.<br></br>
                                        1.Consult with a livestock nutritionist or veterinarian to determine the appropriate amounts and ratios based on the cow's age, weight, and purpose.<br></br>
                                        2.Ensure cows have access to clean and fresh water at all times.
                                    </p>  
                            </div> 
                            <div className='image3'> 
                              <img className='image2' src={"/resources/Feeding.jpg"} alt=''/> 
                            </div> 
                         </div> 
                        <div id='button'>
                                <button className='explore1'>explore</button>
                        </div>
                        <div className='Health '>
                        <div className='image1'>
                                <img className='image2' src={"/resources/health.webp"} alt=''/>
                            </div>
                            <div className='text'>
                            <h2>Health Care</h2>
                                    <p>Regularly brush cows to remove dirt, debris, and loose hair, promoting a healthy coat and blood circulation.<br></br>
                                        1.Trim hooves regularly to prevent overgrowth and related health issues.
                                        2.Provide clean and comfortable bedding to prevent skin issues and enhance cow comfort.
                                    </p> 
                            </div> 
                        </div>
                        <div id='button'>
                            <button className='explore2'>explore</button>
                        </div>
                        <div className='Grooming'>
                                <div className='text1'>
                                    <h2>Grooming and Hygiene</h2>
                                            <p>Provide a balanced diet consisting of forage (grass or hay), concentrates (grains), protein-rich feed (such as soybean meal), and mineral supplements.<br></br>
                                                1.Consult with a livestock nutritionist or veterinarian to determine the appropriate amounts and ratios based on the cow's age, weight, and purpose.<br></br>
                                                2.Ensure cows have access to clean and fresh water at all times.
                                            </p>  
                                </div> 
                                <div className='image3'> 
                                    <img className='image2' src={"/resources/grooming.jpeg"} alt=''/> 
                                </div> 
                                
                        </div>
                        <div id='button'>
                            <button className='explore2'>explore</button>
                        </div>
                        <div className='Exercise'>
                            <div className='image1'>
                                    <img className='image2' src={"/resources/Breeding.jpg"} alt=''/>
                                </div>
                                <div className='text'>
                                <h2>Breeding and Reproduction:</h2>
                                        <p>
                                        Develop a breeding program in consultation with a veterinarian or livestock specialist to optimize reproductive success.<br></br>
                                            1.Monitor heat cycles and use appropriate breeding methods (natural service or artificial insemination) based on your goals and resources.<br></br>
                                            2.Provide proper care during pregnancy, including adequate nutrition and monitoring for any complications.
                                        </p>
                                </div> 
                            </div>
                            <div id='button'>
                                <button className='explore2'>explore</button>
                            </div>
                            <button className='viewMore'>View More  </button>
                    </div>
                    <footer className='footer'>

                    </footer>
                </div>
            </div>
        </div>
    )
 }
 export default CowCare;