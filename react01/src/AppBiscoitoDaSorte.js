import React, { Component } from 'react';

import './styleApp.css';

import biscoito from './assets/biscoito.png'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      textFrase:''
    };
    this.frase = [
      'frase 1',
      'frase 2',
      'frase 3',
      'frase 4',
      'frase 5',
      'frase 6',
      'frase 7'
    ]

    this.quebraBiscoito = this.quebraBiscoito.bind(this)
  }

  quebraBiscoito(){
    
    let numeroAleatorio = Math.floor(Math.random() * this.frase.length)
    this.setState({ textFrase: this.frase[numeroAleatorio]})
  } 

  render(){
    return(
      <div className="container" >
        <img src={biscoito} />
        <Botao acaoBtn={this.quebraBiscoito} nome="Abrir Biscoito"/>
        <h3 className="textoFrase" >{this.state.textFrase}</h3>
      </div>
    )
  }
}

class Botao extends Component{
  render(){
    return(
      <div>
        <button
        onClick={this.props.acaoBtn}
        >{this.props.nome}</button>
      </div>
    )
  }
}

export default App;