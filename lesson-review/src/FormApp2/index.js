import React, { Component } from 'react';

class FormApp2 extends Component {
  state = {
    email: '',
    formError: {
      email: null
    }
  };

  validateInput = (key, value) => {

    let result = null;

    switch(key) {
      case 'email':
        const regex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
        result = (!regex.test(value)) ? 'Invalid Email' : null;
        break;
      default: 
        result = null;
    }

    return result;
  };

  onFormSubmit = (e) => {

    e.preventDefault();
    this.setState({
      formError: {
        email: this.validateInput('email', this.state.email)
      }
    });  
  }

  onFormChange = (e) => {

    const key = e.target.name;
    const value = e.target.value;

    this.setState({
      [key]: value
    });

  };

  render = () => {
    const {
      email,
      formError
    } = this.state;

    return (
      <div style={{
        padding: 10,
        border: '1px solid #222'
      }}>
        <form onSubmit={this.onFormSubmit}>
          <label>Email: </label>
          <input 
            type="text" 
            value={email}
            name='email'
            onChange={this.onFormChange}
          />
          {
            formError.email && 
            <div style={{color: 'red'}}>{formError.email}</div>
          }
        </form>
      </div>
    );
  };
}

export default FormApp2;