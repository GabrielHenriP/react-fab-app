import React, { Component } from 'react';

class Membro extends Component {
  constructor(props){
    super(props);
    this.state = {
      nome: props.nome
    }

    this.entrar = this.entrar.bind(this)
  }

  entrar(){
    this.setState({ nome: 'Matheus'})
  }

  render(){
    return (
      <>
        <h1>Bem vindo(a) {this.state.nome} </h1>
        <button onClick={this.entrar} >Entrar como como matheus</button>
        <button 
        onClick={() => this.setState({ nome: ''})}
        >Sair</button>
      </>
    )
  }
}

export default Membro;