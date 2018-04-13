import React from 'react';
import Link, { navigateTo } from 'gatsby-link';
import { Button, Logo } from 'offcourse-ui-components';

import './style.less';

const Footer = () => {
  const renderMenu = () => {
    return (
      <div>
        <strong>Menu</strong>
        <div className="ui list">
          <div className="item">
            <Link to="/join">Join</Link>
          </div>
          <div className="item">
            <Link to="/build">Build</Link>
          </div>
          <div className="item">
            <Link to="/collaborate">Collaborate</Link>
          </div>
          <div className="item">
            <Link to="/donate">Donate</Link>
          </div>
          <div className="item">
            <Link to="/sign-in">Go to platform</Link>
          </div>
          <div className="item">
            <Button
              positive
              onClick={() => { navigateTo('/sign-up'); }}
            >
              SIGN UP
            </Button>
          </div>
        </div>
      </div>
    );
  };

  const renderSocial = () => {
    return (
      <div>
        <strong>Social</strong>
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

      <div className="computer reversed ui grid container">
        <div className="sixteen wide mobile eight wide computer right floated column">
          <div className="ui two column grid">
            <div className="column">
              {renderMenu()}
            </div>
            <div className="column">
              {renderSocial()}
            </div>
          </div>
        </div>
        <div className="sixteen wide mobile four wide computer left floated column">
          <p>
            Offcourse<br />
            Schiedamsevest 154<br />
            3011 BH Rotterdam
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
