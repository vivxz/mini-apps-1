import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <div class="row" data-x="0" data-y="0" /> 
        <div class="row" data-x="1" data-y="0" />
        <div class="row" data-x="2" data-y="0" />
        <div class="row" data-x="3" data-y="0" />
        <div class="row" data-x="4" data-y="0" />
        <div class="row" data-x="5" data-y="0" />
        <div class="row" data-x="6" data-y="0" />
      </div>
    )
  }
}

export default App;