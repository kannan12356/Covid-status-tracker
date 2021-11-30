import React, {Component} from 'react';
import axios from 'axios';



class World extends Component{

    constructor(){
        super()
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        axios.get("https://corona.lmao.ninja/v2/countries").then(response=>{
            this.setState({data:response.data});
        })
    }

  render(){
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
                            this.state.data.map((countryData,k)=>{
                                return(
                                    <tr>
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
}
export default World;
