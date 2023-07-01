import { useEffect, useState } from "react";
import './disease.css';
const Diseases = () => {
    const [data, setData] = useState([]);
    const [searchData, setSearchData] = useState('');
      
        const handleChange = event => {
            setSearchData(event.target.value);
      
          console.log('value is:', event.target.value);
        };
    useEffect(()=> {
        fetchData();
    },[])

    const fetchData = () =>{
        fetch("http://localhost:5004/data").then((res)=>{
            return res.json();
        }).then((res)=>{
            setData(res);
            console.log(res);
        })
    }
    function search(){
        fetch(`http://localhost:5003/search/${searchData}`).then((res)=>{
            return res.json();
        }).then((res)=>{
            setData(res);
            console.log(res);
        })
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
            <input type="name" placeholder="search"  onChange={handleChange}  value={searchData}/>
            <button className="button" onClick={search}>search</button>
        </div>
        <h1>welcome</h1>
        {

            data.map(({DiseaseName,Instructions,symptoms,image}) => 
            <div className="fetch">
                <div className="total">
                    <h1 className="DiseaseName">{DiseaseName}</h1>
                    <p>{Instructions}</p>                                               
                    <div>{symptoms}</div>
                    <img src={image} className="image"/>
                </div>
            </div>
            )
        }
    </div>)
}
export default Diseases;
