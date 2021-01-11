import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      hora: '00:00:00'
    };
    
  }

  // executa após o componente ser montado
  componentDidMount(){
    setInterval(()=>{
      this.setState({ hora: new Date().toLocaleTimeString() })
    },1000)
  }

  // executa quando o componente -e atualizado
  componentDidUpdate(){
    console.log('aualizou')
  }
  

  alo(){
    alert('alo')
  }

  render(){
    return (
      <div>
        <h1>meu projeto {this.state.hora} </h1>
      </div>
    )
  }
};

export default App;