import React, { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
     email: 'teste',
     senha: '3434444443',
     sexo: ''
    }
    this.salvaEmail = this.salvaEmail.bind(this)
    this.trocaSexo = this.trocaSexo.bind(this)
  }

  salvaEmail(event){
    let textedValue = event.target.value;
    this.setState({ email: textedValue })
  }

  trocaSexo(event){
    let sexo = event.target.value;
    this.setState({ sexo: sexo })
  }

  render(){
    return (
      <>
      <h2>Login</h2>
        Email:
        <input type="email" name="email" value={this.state.email} onChange={this.salvaEmail} /><br/><br/>
        
        Senha:
        <input type="text" name="senha" value={this.state.senha} 
        onChange={event=> this.setState({ senha: event.target.value}) }/><br/><br/>

        Sexo:
        <select name="sexo" value={this.state.sexo} onChange={this.trocaSexo}>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
        </select>

        <div>
          <h4> {this.state.email} </h4>
          <h4> {this.state.senha} </h4>
          <h4> {this.state.sexo} </h4>
        </div>
      </>
    )
  }
}

export default App;