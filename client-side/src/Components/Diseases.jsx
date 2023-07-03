import { useEffect, useState } from "react";
import './disease.css';
const Diseases = () => {
    const [data, setData] = useState([]);
    const [searchData, setSearchData] = useState('');
    useEffect(() => {
        fetchData();
    }, [])

    const handleChange = event => {
        setSearchData(event.target.value);
    };
    const fetchData = () => {
        fetch("http://localhost:5011/data").then((res) => {
            return res.json();
        }).then((res) => {
            setData(res);
            console.log(res);
        })
    }
    function search() {
        fetch(`http://localhost:5011/search/${searchData}`).then((res) => {
            return res.json();
        }).then((res) => {
            setData(res);
            console.log(res);
        })
    }
    function clearData(){
        setSearchData("");
    }
    
    return (<div>
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
                <img src={'/resources/image.webp'} alt="no image" className="small"/>
                
            </div>
            <div style={{display:"flex"}}>
                <input type="name" onChange={handleChange} value={searchData}  />
                <div onClick={()=>{clearData()}} className="clear"><img src={'/resources/clear4.png'}/></div>
            </div>
        </div>
        
        <div className="welcome">
            {

                (data?.filter(function (e) {
                    if (e.DiseaseName.toLocaleLowerCase().includes(searchData.toLocaleLowerCase())) {
                        return data;
                    }
                })?.map(({ DiseaseName, Instructions, symptoms, image }) =>
                            <div className="total">
                            
                                <img src={image} className="image" />
                                <h3 className="DiseaseName">{DiseaseName}</h3>
                                <div className="symptoms"><h3 className="ins"> symptoms :</h3>{symptoms}</div>
                                <p className="Instructions"><h3 className="ins">Instructions :</h3>{Instructions}</p>
                            </div>
                ))
            }
        </div>

    </div>)
}
export default Diseases;
