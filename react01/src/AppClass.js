import React, { Component } from 'react';

class Sobre extends Component {
  render(){
    return (
      <div>
        <h2>Olá sou o {this.props.nome}</h2>
        <h3>Cargo: {this.props.cargo} </h3>
        <h3>Idade : {this.props.idade} </h3>
        <hr/>
      </div>
    )
  }
}

class Equipe extends Component {
  render(){
    return (
      <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade} />
    )
  }
}

export default function App() {
  return (
    <>
      <h1>Conheça Nossa Equipe</h1>
      <br/>
      <Equipe nome="gabriel" cargo="desenvovedor web" idade="23"/>
      <Equipe nome="henri" cargo="design" idade="29"/>
    </>
  )
};