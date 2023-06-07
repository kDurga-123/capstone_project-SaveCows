import React from 'react';
import './homePage.css';
function Homepage(){
    return (
        <div className='backgroundImage'>
            <div className='container'>
                <div className='box'>
                    <div className='circle'></div>
                    <div className='circle1'></div>
                    <div className='circle2'></div>
                </div>
                <h2 className='logo'>saveCows</h2>
                <h2 className='Home'>Home</h2>
                <h2 className='careCow'>careCow</h2>
                <h2 className='MediSymCare'>Effects</h2>
                <h2 className='DocConnect'>DocConnect</h2> 
                <h2 className='signUp'>signUp</h2>
            </div>
            <h1 className='care'>Why?</h1>
            <div>
                <div className='block1'>
                    <div className='image'>
                        <img src="./cow1.webp" alt="no omage"/>
                    </div>
                    <div></div>
                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
            </div>

        </div>
    )
}
export default Homepage;