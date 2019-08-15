import React from 'react';
import axios from 'axios';
import Form3 from './form3.jsx';

class Form2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false,
      name: '',
      inputField: ''
    }
    this.postAddressInformation = this.postAddressInformation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  postAddressInformation() {
    axios
      .post('/', { text: this.state.text })
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err))
  }

  handleSubmit(event) {
    event.preventDefault();
    this.postAddressInformation(this.state.inputField);
  }

  handleClick() {
    this.setState({
      completed: true
    }, () => console.log(this.state.completed))
  }

  handleChange(event) {
    const target = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: target
    }, () => console.log(this.state.text))
  }

  render() {
    return (
      <div>
        {this.state.completed ? <Form3 /> :
          <form onSubmit={this.handleSubmit}>
            <div>
              Address:
            <input name="address" type='text' required onChange={this.handleChange} />
            </div>
            <div>
              Address Line 2:
            <input name="address" type='text' required onChange={this.handleChange} />
            </div>
            <div>
              Phone Number:
            <input name="phoneNumber" type='text' required onChange={this.handleChange} />
            </div>
            <input type='button' value='Next' onClick={this.handleClick} />
          </form>
        }
      </div>
    )
  }
}

export default Form2;