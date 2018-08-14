import React from 'react';
import Link, { navigateTo } from 'gatsby-link';
import { Button, Logo } from 'offcourse-ui-components';

import './style.less';

const Footer = () => {
  const renderMenu = () => {
    return (
      <div>
        <div className="ui list">
          <div className="item">
            <a href="http://contribute.offcourse.io/">Open Source contribution as a developer or designer</a>
          </div>
          <div className="item">
            <Link to="/faq">FAQ</Link>
          </div>
        </div>
      </div>
    );
  };

  const renderSocial = () => {
    return (
      <div>
        <h4>Social & Contact</h4>
        <div className="ui list">
          <div className="item">
            <a href="https://medium.com/@offcourse_io">Medium</a>
          </div>
          <div className="item">
            <a href="https://www.meetup.com/Serverless-Meetup">Meetup</a>
          </div>
          <div className="item">
            <a href="https://twitter.com/offcourse_">Twitter</a>
          </div>
          <div className="item">
            <a href="https://www.linkedin.com/company/7962249/">LinkedIn</a>
          </div>
          <div className="item">
            <a href="mailto:contact@offcourse.io">Email</a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="Footer">
      <div className="Footer__logo center aligned">
        <Logo />
      </div>

      <div className="ui grid container">
        <div className="row">
          <div className="sixteen wide mobile ten wide computer column">
            <h4>About</h4>
            <p style={{ maxWidth: '600px' }}>Offcourse is an open source platform for crowdsourced learning and knowledge sharing. We call it <strong>crowdlearning</strong> for short.</p>
            <p>
              Offcourse<br />
              Schiedamsevest 154<br />
              3011 BH Rotterdam
            </p>
          </div>
          <div className="eight wide mobile three wide computer column">
            {renderMenu()}
          </div>
          <div className="eight wide mobile three wide computer column">
            {renderSocial()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
