import React, { Component } from 'react';
import { Button } from 'offcourse-ui-components';
import validator from 'email-validator';

class NewsletterSignUp extends Component {
  constructor(props) {
    super(props);

    this.handleEmailChange = this.handleEmailChange.bind(this);

    this.state = {
      email: '',
    };
  }

  handleEmailChange(ev) {
    const { value } = ev.target;

    this.setState({ email: value });
  }

  render() {
    const { email } = this.state;

    const isValid = validator.validate(email);

    return (
      <form
        className="ui form"
        action="https://offcourse.us13.list-manage.com/subscribe/post?u=3888907a37a3a88f5d6d88573&amp;id=3009ed104a"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
      >
        <div className="ui large action input">
          <input
            id="email"
            name="EMAIL"
            onChange={this.handleEmailChange}
            placeholder="E-mail"
            type="text"
            value={email}
          />
          <Button positive type="submit" disabled={!isValid}>JOIN</Button>
        </div>
      </form>
    );
  }
}

export default NewsletterSignUp;
