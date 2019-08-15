import React from 'react';
import Form1 from './form1.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      completed: true
    })
  }

  render() {
    return (
      <div>
        {this.state.completed ? <Form1 /> :
          <form>
            <input type="button" value="CHECKING OUT" onClick={this.handleClick} />
          </form>
        }
      </div>
    )
  }
}

export default App;