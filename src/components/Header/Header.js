import React, { Component} from 'react';
import { Button, BasicButton, Logo } from 'offcourse-ui-components';
import { navigateTo } from 'gatsby-link';

import ScrollWatch from '../ScrollWatch';

import './style.less';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
    }
  }

  render() {
    const { menuOpen } = this.state;

    return (
      <ScrollWatch render={(x, y) => {
          return (
            <div className={`Header ${y > 0 ? 'scrolled' : ''}`}>
              <div className="Header__logo"><Logo /></div>

              <a
                className="Header__hamburger"
                onClick={() => { this.setState({ menuOpen: !menuOpen }); }}
              >
                <i className="fas fa-bars" />
              </a>

              <ul className={`Header__menu ${menuOpen ? 'active' : ''}`}>
                <li className="Header__menu-item">
                  <BasicButton
                    onClick={() => { navigateTo('/'); }}
                  >
                    Home
                  </BasicButton>
                </li>
                <li className="Header__menu-item">
                  <BasicButton
                    onClick={() => { navigateTo('/join'); }}
                  >
                    Join
                  </BasicButton>
                </li>
                <li className="Header__menu-item">
                  <BasicButton
                    onClick={() => { navigateTo('/build'); }}
                  >
                    Build
                  </BasicButton>
                </li>
                <li className="Header__menu-item">
                  <BasicButton
                    onClick={() => { navigateTo('/collaborate'); }}
                  >
                    Collaborate
                  </BasicButton>
                </li>
                <li className="Header__menu-item">
                  <BasicButton
                    onClick={() => { navigateTo('/donate'); }}
                  >
                    Donate
                  </BasicButton>
                </li>
                <li className="Header__menu-item">
                  <BasicButton
                    onClick={() => { navigateTo('/blog'); }}
                  >
                    Blog
                  </BasicButton>
                </li>
                <li className="Header__menu-item">
                  <BasicButton
                    onClick={() => { navigateTo('/sign-in'); }}
                  >
                    Go to platform
                  </BasicButton>
                </li>
                <li className="Header__menu-item">
                  <Button
                    onClick={() => { navigateTo('/sign-up'); }}
                    positive
                  >
                    Sign up
                  </Button>
                </li>
              </ul>
            </div>
          );
        }}
      />

    );
  }
};

export default Header;
