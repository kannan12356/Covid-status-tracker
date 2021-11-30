import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import State from './State';
import axios from 'axios';

class India extends Component{

    constructor(){
        super();
        this.state = {
            data : []
        }
    }

    componentDidMount(){
        axios.get("https://corona.lmao.ninja/v2/countries/india").then(response=>{
            this.setState({data:response.data});
        })
    }

  render(){
    return(
        <div className="row" style={{marginTop: "10px"}}>
            <div className="col-md-12">
                <img style={{width: '80px'}} src="https://www.countryflags.com/wp-content/uploads/india-flag-png-large.png" alt="india"/>
                <h3>India</h3>
            </div>  
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-3">
                        <Card bg='primary' text='white' style={{ width: '18rem' }}>
                            <Card.Body className="text-center">
                                <Card.Title>Total Cases</Card.Title>
                                <h3>{this.state.data.cases}</h3>
                                <Card.Text>
                                    [Today : {this.state.data.todayCases}]
                                </Card.Text>                      
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card bg='warning' text='white' style={{ width: '18rem' }}>
                            <Card.Body className="text-center">
                                <Card.Title>Active Cases</Card.Title>
                                <h3>{this.state.data.active}</h3>
                                <Card.Text>
                                    [Today : 0]
                                </Card.Text>                      
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card bg='success' text='white' style={{ width: '18rem' }}>
                            <Card.Body className="text-center">
                                <Card.Title>Recovered</Card.Title>
                                <h3>{this.state.data.recovered}</h3>
                                <Card.Text>
                                    [Today : {this.state.data.todayRecovered}]
                                </Card.Text>                      
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card bg='danger' text='white' style={{ width: '18rem' }}>
                            <Card.Body className="text-center">
                                <Card.Title>Total Deaths</Card.Title>
                                <h3>{this.state.data.deaths}</h3>
                                <Card.Text>
                                    [Today : {this.state.data.todayDeaths}]
                                </Card.Text>                      
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-12" style={{marginTop: "10px"}}>
                        <State/>
                    </div>

                </div>
            </div>
        </div>
    )
  }
}
export default India;
