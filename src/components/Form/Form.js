import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export class Form extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;
    name && number
      ? this.props.onSubmit({ id: uuidv4(), ...this.state })
      : alert('Fill all fields!');
    this.setState({ name: '', number: '' });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <label style={{ marginBottom: 20 }}>
          Name
          <input
            style={{ marginLeft: 36 }}
            type="text"
            placeholder="Enter name"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label style={{ marginBottom: 25 }}>
          Number
          <input
            style={{ marginLeft: 20 }}
            type="text"
            placeholder="Enter number"
            name="number"
            value={number}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit" style={{ width: 200, marginLeft: 50 }}>
          Add contact
        </button>
      </form>
    );
  }
}
