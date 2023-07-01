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
        fetch("http://localhost:5007/data").then((res) => {
            return res.json();
        }).then((res) => {
            setData(res);
            console.log(res);
        })
    }
    function search() {
        fetch(`http://localhost:5007/search/${searchData}`).then((res) => {
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
            <div style={{display:"flex"}}>
                <input type="name" placeholder="search" onChange={handleChange} value={searchData} />
                <div onClick={()=>{clearData()}} className="clear">clear</div>
            </div>
        </div>
        <h1 className="welcome">
            {

                (data?.filter(function (e) {
                    if (e.DiseaseName.toLocaleLowerCase().includes(searchData.toLocaleLowerCase())) {
                        return data;
                    }
                })?.map(({ DiseaseName, Instructions, symptoms, image }) =>
                    <div className="mainFunction">
                        <div className="fetch">
                            <div className="total">
                                <h1 className="DiseaseName">{DiseaseName}</h1>
                                <p className="Instructions">{Instructions}</p>
                                <div className="symptoms">{symptoms}</div>
                                <img src={image} className="image" />
                            </div>
                        </div>
                    </div>
                ))
            }
        </h1>

    </div>)
}
export default Diseases;
