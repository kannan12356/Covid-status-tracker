import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Accordion} from 'react-bootstrap';

function State(){
    const [stateData, setStateData] = useState([]);

    useEffect(() => {
        axios.get("https://data.covid19india.org/state_district_wise.json").then(response=>{
            setStateData(response.data);
        })
    }, []);

    let keys = Object.keys(stateData);
    return(
        <div className="row">
            <div className="col-md-12">
                <Accordion>
                    {
                        keys.map((state,k)=>{
                                
                            let districts = stateData[state].districtData;
                                
                            let totalActive = 0;
                            let totalConfirmed = 0;
                            let totalDeaths = 0;
                            let totalRecover = 0;

                            let districtList = [];

                            for(let x in districts){
                                totalActive += districts[x].active;
                                totalConfirmed += districts[x].confirmed;
                                totalDeaths += districts[x].deceased;
                                totalRecover += districts[x].recovered;

                                let ob = districts[x];
                                ob["districtName"] = x;
                                districtList.push(ob);
                            }
                                
                            return(                                                
                                <Accordion.Item key={k} eventKey={k}>
                                    <Accordion.Header>
                                        <span style={{marginRight:"10px"}}>{state}</span>
                                        <span style={{marginRight: "10px"}} className="btn btn-dark">Cases : {totalConfirmed}</span> 
                                        <span style={{marginRight: "10px"}} className="btn btn-dark">Active : {totalActive}</span>
                                        <span style={{marginRight: "10px"}} className="btn btn-dark">Death : {totalDeaths}</span>
                                        <span style={{marginRight: "10px"}} className="btn btn-dark">Recover : {totalRecover}</span>
                                    </Accordion.Header>
                                    
                                    <Accordion.Body>
                                        <table className="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <td>District</td>
                                                    <td>Confirmed</td>
                                                    <td>Active</td>
                                                    <td>Recovered</td>
                                                    <td>Deaths</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    districtList.map((district,k)=>{
                                                        return(
                                                            <tr key={k}>
                                                                <td>{district.districtName}</td>
                                                                <td>{district.confirmed}</td>
                                                                <td>{district.active}</td>
                                                                <td>{district.recovered}</td>
                                                                <td>{district.deceased}</td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </Accordion.Body>
                                </Accordion.Item>
                            )
                        })
                    }
                </Accordion>
            </div>
        </div>
    )
}

export default State;
