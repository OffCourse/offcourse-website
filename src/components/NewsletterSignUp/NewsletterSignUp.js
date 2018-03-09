import React, { Component } from 'react';
import { Button } from 'offcourse-ui-components';

class NewsletterSignUp extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      email: '',
    };
  }

  handleInputChange(ev) {
    const { name, value } = ev.target;

    this.setState({ [name]: value });
  }

  handleSubmit() {
    const { email } = this.state;

    alert(`We need to submit ${email} to mailing list`);

    this.setState({ email: '' });
  }

  render() {
    const { email } = this.state;

    return (
      <div className="ui large action input">
        <input
          id="email"
          name="email"
          onChange={this.handleInputChange}
          placeholder="E-mail"
          type="text"
          value={email}
        />
        <Button positive onClick={this.handleSubmit}>JOIN</Button>
      </div>
    );
  }
}

export default NewsletterSignUp;
