import React from 'react';
import './effects.css'
// function bovineRespiratory{
//     const fetchData = () =>{
//         fetch("http://localhost:5000/data").then((res)=>{
//             return res.json();
//         }).then((res)=>{
//             setData(res);
//             console.log(res);
//         })
//     }
// }
function Effects(){
    return(
        <div>
            <div className='backgroundImage'>
                        <div className='container'>
                            <h2 id='logo'>savecows</h2>
                            <h2 className='Home'>home</h2>
                            <h2 className='careCow'>carecow</h2>
                            <h2 className='MediSymCare'>effects</h2>
                            <h2 className='DocConnect'>doctordetails</h2> 
                            <h2 className='signUp'>signup</h2>
                            <h2 className='profile'>profile</h2>
                        </div>
            </div>
            <div className='disease1'>
                <div>
                    <input type='text' placeholder='search......' className='input'/>
                    <button id='search' onClick={bovineRespiratory()}>search</button>
                </div>
                <div>
                    <button>Bovine Respiratory Disease (BRD)</button>
                    <button>Bovine VirRouter</button>
                    <button>Infectious Bovine Rhinotracheitis (IBR)</button>
                    <button>Bovine Tuberculosis (TB)</button>
                    <button>Foot-and-Mouth Disease (FMD)</button>
                    <button>Mastitis</button>
                    <button>Johne's Disease</button>
                    <button>Blackleg</button>
                    <button>Brucellosis</button>
                    <button>Bovine Spongiform Encephalopathy (BSE) or Mad Cow Disease</button>
                    <button>Anthrax</button>
                    <button>Leptospirosis</button>
                    <button>Lumpy Skin Disease</button>
                    <button>Theileriosis</button>
                    <button>Udder Edema</button>
                    <button>Staphylococcal Mastitis</button>
                    <button>Nitrate Poisoning</button>
                    <button>Yersiniosis</button>
                    <button>Tetanus</button>
                    <button>Ringworm</button>
                    <button>Piroplasmosis</button>
                    <button>Listeriosis</button>
                    <button>Mastitis</button>
                    <button>Malignant Catarrhal Fever</button>
                    <button>E. coli Infection</button>
                    <button>Dermatophilosis</button>
                    <button>Coccidiosis</button>
            </div>
            
            <div>
                    <button className='button'>view More</button>
                </div> 
            <div className='bone'>
                <div className='display1'>
                        <div className='symptoms'>
                            <img src={"/resources/bovine2.jpeg"} alt="" className='lugeImage'/>
                            <p className='paragraph1'>Schematic overview of the pathogenesis of bovine respiratory disease in cattle.</p>
                        </div>
                        <div className='symptoms1'>
                            <img src={"/resources/bovine3.jpeg"} alt="" className='lugeImage1'/>
                            <p className='paragraph1'>Lung lesions in an abattoir specimen.  The cranioventral lobes are afflicted with enzootic pneumonia and show areas of consolidation and collapse.</p>
                        </div>
                        <div className='symptoms2'>
                            <img src={"/resources/bovine4.jpeg"} alt="" className='lugeImage2'/>
                            <p className='paragraph1'>Production Significance of Bovine Respiratory Disease Lesions in Slaughtered Beef Cattle</p>
                         </div>
               </div>
               <div className='about'>
                    <div className='buttons'>
                        <button>Symtoms</button>
                        <button>Disease</button>
                        <button>disease management strategies</button>
                        <button>after-disease care guidelines</button>
                        <button>why the disease </button>
                        <button>basic medicine</button>
                    </div>
                    <div id='text5'>
                        <img src={"/resources/images.jpeg"} alt="" className='management'/>
                        <h2 className='brd'>Bovine Respiratory Disease (BRD)</h2>
                        <p className='paragraph'>
                                    Bovine Respiratory Disease (BRD) can exhibit various symptoms in affected cattle. Here are some common symptoms associated with BRD:<br></br>

                                    <b>Coughing:</b>Cattle with BRD often develop a persistent, dry cough. The severity of coughing can vary from mild to severe, depending on the individual animal and the progression of the disease.<br></br>

                                    <b>Nasal discharge:</b> Infected animals may have nasal discharge that can range from clear and watery to thick and purulent (pus-like). The color and consistency of the discharge may change as the disease progresses.<br></br>

                                    <b>Rapid or labored breathing:</b> Cattle with BRD may exhibit increased respiratory rate and effort. They may breathe with an open mouth and show signs of respiratory distress.<br></br>

                                    <b>Fever:</b> Elevated body temperature is a common symptom of BRD. Infected animals may have a fever above the normal range, typically around 103-105°F (39-40.5°C).<br></br>

                                    <b>Reduced appetite and weight loss:</b> BRD can cause a decrease in feed intake, leading to weight loss and poor body condition.

                                    <b>Depression and lethargy: </b>Infected animals often appear dull, lethargic, and may isolate themselves from the herd. They may show a lack of interest in their surroundings.<br></br>

                                    <b>Eye and ear abnormalities: </b> In severe cases, BRD can lead to eye and ear infections. The eyes may appear red and irritated, with discharge. Similarly, the ears may show signs of inflammation, discharge, and swelling.<br></br>

                                    It's important to note that these symptoms can vary in severity and may overlap with other respiratory or systemic diseases. If you suspect BRD or observe these symptoms in your cattle, it is recommended to consult a veterinarian for an accurate diagnosis and appropriate treatment.
                        </p>
                    </div>
               </div>
               
            </div>
        </div>
        <footer>
            <div className='footer'>

            </div>
        </footer>
    </div>
           
       
    )
}
export default Effects;