import React, { Component } from 'react';
import { Button } from 'offcourse-ui-components';

const ContactForm = () => {
  return (
    <form
      className="ui form"
      method="post"
      action="https://formspree.io/contact@offcourse.io"
    >
      <div className="field text-left">
        <label htmlFor="name">Name</label>
        <input
          name="name"
          id="name"
          type="text"
        />
      </div>
      <div className="field text-left">
        <label htmlFor="email">Email</label>
        <input
          name="email"
          id="email"
          type="email"
        />
      </div>
      <div className="field text-left">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
        />
      </div>

      <div className="text-left">
        <Button type="submit">Submit message</Button>
      </div>
    </form>
  );
};

export default ContactForm;
