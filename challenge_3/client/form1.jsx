import React from 'react';
import axios from 'axios';
import Form2 from './form2.jsx';

class Form1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false,
      name: ''
    }
    this.postAccountsInfo = this.postAccountsInfo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  postAccountsInfo() {
    axios
      .post('/', { text: this.state.text })
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err))
  }

  handleSubmit(event) {
    event.preventDefault();
    this.postAccountsInfo(this.state.inputField);
  }

  handleChange(event) {
    const target = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: target
    })
  }

  handleClick() {
    this.setState({
      completed: true
    }, () => console.log(this.state.completed))
  }

  render() {
    return (
      <div>
        {this.state.completed ? <Form2 /> :
          <form onSubmit={this.handleSubmit}>
            <div>
              Name:
          <input name="name" type='text' required onChange={this.handleChange} />
            </div>
            <div>
              Email:
          <input name="email" type='email' required onChange={this.handleChange} />
            </div>
            <div>
              Password:
          <input name="password" type='password' required onChange={this.handleChange} />
            </div>
            <input type='button' value='Next' onClick={this.handleClick} />
          </form>
        }
      </div>
    )
  }
}

export default Form1;