import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
      ]
    }
  }

  render() {
    const { board } = this.state;
    return (
      <div>
        {board.map((row, i) => (
          <div class="col" key={i}>
            {row.map((col, j) => (
              <span class="row" key={j}>{col}</span>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default App;