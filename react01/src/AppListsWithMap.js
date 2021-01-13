import React, { Component } from 'react';

import Feed from '../src/components/Feed/Feed';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
     feed: [
       {id:1, username: 'Gabriel', curtidas: 10, comentarios:2},
       {id:2, username: 'Daniel', curtidas: 2, comentarios:5},
       {id:3, username: 'Pedro', curtidas: 140, comentarios:78},
       {id:4, username: 'Gabriel', curtidas: 10, comentarios:2},
       {id:5, username: 'Daniel', curtidas: 2, comentarios:5},
       {id:6, username: 'Pedro', curtidas: 140, comentarios:78}
     ]
    }
  }

  render(){
    return (
      <>
        { this.state.feed.map( item => {
          return (
            <Feed key={item.id} username={item.username} curtidas={item.curtidas} comentarios={item.comentarios} />
          )
        })}
        
      </>
    )
  }
}

export default App;