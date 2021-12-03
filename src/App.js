import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Components/Header';
import India from './Components/India';
import World from './Components/World';

function App(){

  return(
    <div className="App">
      <Router>
        <div>
          <Header/>
          <div className="container-fluid">
            <Routes>
              <Route path="/" element={<India/>}/>
              <Route path="/India" element={<India/>}/>
              <Route path="/World" element={<World/>}/>
            </Routes>          
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App;
