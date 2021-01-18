import React, { Component } from 'react';

import cronometro from './assets/cronometro.png'

import './styleApp2.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
     
    };
    
  }

  render(){
    return(
      <div className="container" >
        <img src={cronometro} alt=""/>
        <a className="timer">0.0</a>
        <div className="areaBtn" >
          <a href="">Vai</a>
          <a href="">Limpar</a>
        </div>
      </div>
    )
  }
}

export default App;