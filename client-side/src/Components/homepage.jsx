import React from 'react';
import './homePage.css';
function Homepage(){
return (
    <div>
        <div className='image'>
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

            <h1 className='available'>Find a Available veternary doctors</h1>
            <h3 className='milk'>It doesn't matter how much milk you spill as long as <br>
            </br><h3 className='lose'>you don't lose the cow.</h3></h3>
            <div className='cow'>
                <div className='emergency'>
                    <img src={'/resources/images.png'} alt="" className='doctor'/>
                    <h3 className='qualified'>Qualified Doctors</h3>
                    <p className='website'>These doctors provide medical advice,<br></br> consultations,and treatment services<br></br> through the website.</p>
                </div>
                <div className='emergency2'>
                    <img src={'/resources/emergency.webp'} alt="" className='doctor'/>
                    <h3 className='qualified1'>Emergency Care</h3>
                    <p className='website1'>The website offers immediate emergency<br></br> veterinary care for your cow.</p>
                </div>
                <div className='emergency3'>
                    <img src={'/resources/24hours.jpg'} alt="" className='doctor'/>
                    <h3 className='qualified'>24 hours services</h3>
                    <p className='website'>The website offers 24/7 emergency<br></br> veterinary service with qualified<br></br> doctors always available. </p>
                </div>
                <div className='emergency4'>
                    <img src={'/resources/outdoor.jpg'} alt="" className='doctor'/>
                    <h3 className='qualified1'>outdoor Checkup</h3>
                    <p className='website1'>Doctors come to your location for convenient <br></br>outdoor checkups for your cow's medical<br></br> needs, provided by the website.</p>
                </div>

        </div>
    </div>
    </div>
                <h1 className='care'>Why?</h1>
            <div>
                <div className='block1'>
                    <div className='image2'>
                    <img src={"/resources/cow1.jpeg"} alt="no omage" className='cow1'/>
                </div>
                <div className='text7'>
                    <h1>Historical Importance</h1>
                    <p className='IndianCulture'> 
                    The cow is considered sacred in Hinduism, the predominant 
                    religion in India. It is revered as a symbol of divine and
                    maternal qualities. Hindu scriptures describe the cow as a
                    giver of life and sustenance, and it is associated with various deities
                    like Lord Krishna and Goddess Kamadhen .
                    </p> 
                    <button className='know'>Know more</button>
                </div>

            </div>
                <div className='block2'>
                    <div className='text5'>
                        <h1>Nutritional Importance</h1>
                        <p className='nutritionalImportence'>
                        Cows are seen as a symbol of abundance, fertility, and purity in Indian culture.
                        They represent prosperity and are often depicted in religious rituals, ceremonies, 
                        and traditional art forms. Cow motifs can be found in ancient sculptures, paintings,
                        and even on Indian currency notes.
                        </p>
                        <button className='know'>Know More</button>
                     </div>
                    <div className='image1'>
                        <img src={"/resources/cow2.jpg"} alt="no omage" className='cow2'/> 
                    </div>

                </div>
                <div className='block3'>
                        <div className='image9'>
                            <img src={"/resources/cow2.avif"} alt="no omage" className='cow3'/>
                        </div>
                        <div className='text6'>
                            <h1 className='practice'>Traditional Practices</h1>
                            <p className='TraditionalPractices'>
                            In rural areas of India, cow rearing and dairy farming have been traditional 
                            occupations for many communities. The practice of cow worship, feeding stray 
                            cows, and donating cows to temples or charitable organizations are common 
                            customs observed by devout Hindus.
                            </p> 
                            <button className='know'>know More</button>
                        </div>

                    </div>
                </div>
                <div> 
                    <div id='types'>
                        <h1 className='center'>Various Cows</h1>
                    <div className='allCows'>
                    <div className='box1'>
                        <h3>Gir </h3>
                        <img src={"/resources/Gir-bull.png"} alt="no image" className='gir'/>
                        <p className='special'>Gir cows come from the Gir forest in Gujarat. They have strong bodies, 
                        long horns, and a special hump. </p>
                    </div>
                <div className='box4'>
                    <h3>Ongole</h3>
                    <img src="./ongole.jpg" alt="no image" className='ongole'/>
                    <p className='long'> Ongole cows, also called Nellore, come from Andhra Pradesh,
                    India. They are strong and have long horns, with a white 
                    or gray coat. </p>
                </div>
                <div className='box2'>
                    <h3>Sahiwal</h3>
                    <img src="./Sahiwal.webp" alt="no image" className='sahiwal'/>
                    <p className='milk1'>Sahiwal cows are  from Punjab, India.They have a reddish-brown
                    coat and give a lot of milk.</p>
                </div>
            </div>
                        <div>
                        <button className='button'>View More</button>
                    </div> 
                </div>
            </div>
                <div>
                    <h1 className='hindus'>Hindus worship the cows </h1>
                    <div className='worship'>
                    <p className='Hindu'>The cow is associated with several Hindu deities, most notably Lord Krishna,<br></br> 
                    who is often depicted as a cowherd. In Hindu scriptures, cows are praised for their nurturing<br></br> 
                    nature and their ability to provide milk, a source of nourishment and sustenance. Milk and dairy products<br></br>
                    have important religious significance in Hindu rituals and ceremonies.</p>

                </div>
                </div>
                <video className='vedio' controls>
                    <source src="/resources/cow.mp4" type="video/mp4" />
                </video>
            <footer>
                <div>
                    <div className='container1'>
                        <h4>About</h4>
                        <h4>Languages</h4>
                        <h4>contact us</h4>
                        <h4>cows health manuals</h4>
                    </div>
                </div>
            </footer> 
</div>
) 
} 
export default Homepage;



