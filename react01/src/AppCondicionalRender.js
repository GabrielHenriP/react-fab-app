import React, { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      status: 2,
      isVisitant: true
    }
  }

  render(){
    return (
      <>
        { this.state.status === 1 &&
          <h1>Bem vindo</h1>
        }
        { this.state.isVisitant ? 
          <h2>Bem vindo(a) visitante, faça o login</h2> :
          <h2> Bem vindo Jogador</h2>
        }
      </>
    )
  }
}

export default App;