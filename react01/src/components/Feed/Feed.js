import React, { Component } from 'react';

class Feed extends Component {
  render(){
    return (
      <div key={this.props.key} >
        <h2>{this.props.username}</h2>
        <p>curtidas: {this.props.curtidas} </p>
        <p>comentarios: {this.props.comentarios} </p>
        <hr/>
      </div>
    )
  }
};

export default Feed;