import React, { useEffect, useState } from 'react';
import axios from 'axios';


function World(){
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("https://corona.lmao.ninja/v2/countries").then(response=>{
            setData(response.data);
        })        
    }, [])

    return(
        <div className="row">
            <div className="col-md-12">
                <table className="table table-borederd table-striped">
                    <thead>
                        <tr>
                            <td>Country</td>
                            <td>Total Cases</td>
                            <td>Recovered</td>
                            <td>Death</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((countryData,k)=>{
                                return(
                                    <tr key={k}>
                                        <td>
                                            <img style={{width:"30px", marginRight: "10px"}} src={countryData.countryInfo.flag} alt="flag"/>
                                            {countryData.country}                                            
                                        </td>
                                        <td>{countryData.cases}</td>
                                        <td>{countryData.recovered}</td>
                                        <td>{countryData.deaths}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default World;
