import React, { useEffect, useState } from "react";
import './disease.css';


const Diseases = () => {
    const [data, setData] = useState([]);
    const [searchData, setSearchData] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const handleChange = event => {
        setSearchData(event.target.value);
    };

    const fetchData = () => {
        fetch("http://localhost:8082/data")
            .then(res => res.json())
            .then(res => {
                setData(res);
                console.log(res);
            });
    };

    const search = () => {
        fetch(`http://localhost:8082/search/${searchData}`)
            .then(res => res.json())
            .then(res => {
                setData(res);
                console.log(res);
            });
    };

    const clearData = () => {
        setSearchData("");
    };

    return (
        <div>
            <div className="main">
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

            <div className="mainImage">
                <img src={'/resources/image.webp'} alt="no image" className="small" />
            </div>

            <div style={{display:"flex"}}>
               <input type="text" onChange={handleChange} value={searchData} />
                <div onClick={clearData} className="clear">
                    <img src={'/resources/clear4.png'} alt="clear" />
                 </div>             </div> 

            <div className="welcome">
                {data
                    .filter(e => e.DiseaseName.toLowerCase().includes(searchData.toLowerCase()))
                    .map(({ DiseaseName, Instructions, symptoms, image }) => (
                        <div className="total" key={DiseaseName}>
                            <img src={image} className="image" alt={DiseaseName} />
                            <h3 className="DiseaseName">{DiseaseName}</h3>
                            <div className="symptoms">
                                <h3 className="ins">Symptoms:</h3>
                                {symptoms}
                            </div>
                            <p className="Instructions">
                                <h3 className="ins">Instructions:</h3>
                                {Instructions}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Diseases;
