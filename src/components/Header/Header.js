import React, { Component } from 'react';
import { Button, BasicButton, Logo } from 'offcourse-ui-components';
import Link, { navigateTo } from 'gatsby-link';

import ScrollWatch from '../ScrollWatch';

import './style.less';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false,
    }
  }

  render() {
    const { isMenuOpen } = this.state;

    return (
      <ScrollWatch render={(x, y) => {
          return (
            <div className={`Header ${y > 0 ? 'scrolled' : ''}`}>
              <Link to="/" className="Header__logo"><Logo /></Link>

              <a
                className="Header__hamburger"
                onClick={() => { this.setState({ isMenuOpen: !isMenuOpen }); }}
              >
                <i className="fas fa-bars" />
              </a>

              <ul className={`Header__menu ${isMenuOpen ? 'active' : ''}`}>
                <li className="Header__menu-item">
                  <BasicButton
                    onClick={() => {
                      navigateTo('/');
                      this.setState({ isMenuOpen: false });
                    }}
                  >
                    Home
                  </BasicButton>
                </li>
                <li className="Header__menu-item">
                  <BasicButton
                    onClick={() => {
                      navigateTo('/join');
                      this.setState({ isMenuOpen: false });
                    }}
                  >
                    Join
                  </BasicButton>
                </li>
                <li className="Header__menu-item">
                  <BasicButton
                    onClick={() => {
                      navigateTo('/build');
                      this.setState({ isMenuOpen: false });
                    }}
                  >
                    Build
                  </BasicButton>
                </li>
                <li className="Header__menu-item">
                  <BasicButton
                    onClick={() => {
                      navigateTo('/collaborate');
                      this.setState({ isMenuOpen: false });
                    }}
                  >
                    Collaborate
                  </BasicButton>
                </li>
                <li className="Header__menu-item">
                  <BasicButton
                    onClick={() => {
                      navigateTo('/donate');
                      this.setState({ isMenuOpen: false });
                    }}
                  >
                    Donate
                  </BasicButton>
                </li>
                <li className="Header__menu-item">
                  <BasicButton
                    onClick={() => {
                      navigateTo('/blog');
                      this.setState({ isMenuOpen: false });
                    }}
                  >
                    Blog
                  </BasicButton>
                </li>
                <li className="Header__menu-item">
                  <BasicButton
                    onClick={() => {
                      navigateTo('/sign-in');
                      this.setState({ isMenuOpen: false });
                    }}
                  >
                    Go to platform
                  </BasicButton>
                </li>
                <li className="Header__menu-item">
                  <Button
                    onClick={() => {
                      navigateTo('/sign-up');
                      this.setState({ isMenuOpen: false });
                    }}
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
