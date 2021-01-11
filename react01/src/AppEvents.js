import React, { Component } from 'react';

import Membro from './components/Membro/Membro';

class App extends Component {
  render(){
    return (
      <>
        <Membro nome="visitante" />
      </>
    )
  }
}

export default App;