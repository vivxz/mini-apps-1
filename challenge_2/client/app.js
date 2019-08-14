import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      inputField: ''
    }
    this.postTexts = this.postTexts.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // componentDidMount() {
  //   this.postTexts();
  // }

  postTexts() {
    axios
      .post('/api', { text: this.state.text })
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err))
  }

  handleSubmit(event) {
    event.preventDefault(); // prevents page from reloading after submit
    this.postTexts(this.state.inputField);
    // event.target.reset(); // to clear the formfield
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    }, () => console.log(this.state.text))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default App;