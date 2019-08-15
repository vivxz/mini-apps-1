import React from 'react';
import axios from 'axios';
import App from './app.jsx';

class Form3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: true,
      name: '',
      inputField: ''
    }
    this.postCreditCardInfo = this.postCreditCardInfo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  postCreditCardInfo() {
    axios
      .post('/', { text: this.state.text })
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err))
  }

  handleSubmit(event) {
    event.preventDefault();
    this.postCreditCardInfo(this.state.inputField);
  }

  handleChange(event) {
    const target = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: target
    }, () => console.log(this.state.text))
  }

  handleClick() {
    this.setState({
      completed: false
    })
  }

  render() {
    return (
      <div>
        {this.state.completed ?
          <form onSubmit={this.handleSubmit}>
            <div>Credit card #:
            <input name="creditCard" type='text' required onChange={this.handleChange} />
            </div>
            <div>
              Expiration date:
            <input name="expirationDate" type='text' required onChange={this.handleChange} />
            </div>
            <div>
              CVV:
            <input name="cvv" type='text' required onChange={this.handleChange} />
            </div>
            <div>
              Zip code:
            <input name="zipCode" type='text' required onChange={this.handleChange} />
            </div>
            <input type='button' value='PAY' onChange={this.handleChange} />
          </form>
          : <App />}
      </div>
    )
  }
}
export default Form3;