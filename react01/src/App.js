import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      nome: 'Gabriel',
      contador: 0
    };

    this.aumentar = this.aumentar.bind(this)
    this.diminuir = this.diminuir.bind(this)
  }

  diminuir(){
    let state = this.state; 
    state.contador--; 
    this.setState(state)
  }

  aumentar(){
    let state = this.state; //todos os estados
    state.contador++; // alterando apenas o estado 'contador'
    this.setState(state)
  }

  render(){
    return (
      <div>
        <h2>Contador</h2>
        <h3>
           <button onClick={this.diminuir}>-</button> 
           {this.state.contador} 
           <button onClick={this.aumentar} >+</button>
           </h3>
      </div>
    )
  }
};

export default App;