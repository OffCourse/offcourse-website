import React, { Component } from 'react';
import { Button } from 'offcourse-ui-components';

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      email: '',
      message: '',
      name: '',
    };
  }

  handleInputChange(ev) {
    const { name, value } = ev.target;

    this.setState({ [name]: value });
  }

  handleSubmit() {
    alert('We need to submit contact form');

    this.setState({
      email: '',
      message: '',
      name: '',
    });
  }

  render() {
    const { email, message, name } = this.state;

    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="field text-left">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            id="name"
            onChange={this.handleInputChange}
            type="text"
            value={name}
          />
        </div>
        <div className="field text-left">
          <label htmlFor="email">Name</label>
          <input
            name="email"
            id="email"
            onChange={this.handleInputChange}
            type="email"
            value={email}
          />
        </div>
        <div className="field text-left">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            onChange={this.handleInputChange}
            value={message}
          />
        </div>

        <div className="text-left">
          <Button type="submit">Submit message</Button>
        </div>
      </form>
    );
  }
}

export default ContactForm;
