import React from 'react';
import { Button, BasicButton, Menubar } from 'offcourse-ui-components';
import { navigateTo } from 'gatsby-link';

import ScrollWatch from '../ScrollWatch';

import './style.less';

const Header = () => {
  return (
    <ScrollWatch render={(x, y) => {
        return (
          <div className={`Header ${y > 0 ? 'scrolled' : ''}`}>
            <Menubar>
              <BasicButton
                onClick={() => { navigateTo('/'); }}
              >
                HOME
              </BasicButton>
              <BasicButton
                onClick={() => { navigateTo('/join'); }}
              >
                JOIN
              </BasicButton>
              <BasicButton
                onClick={() => { navigateTo('/collaborate'); }}
              >
                COLLABORATE
              </BasicButton>
              <BasicButton
                onClick={() => { navigateTo('/donate'); }}
              >
                DONATE
              </BasicButton>
              <BasicButton
                onClick={() => { navigateTo('/blog'); }}
              >
                BLOG
              </BasicButton>
              <BasicButton
                onClick={() => { navigateTo('/sign-in'); }}
              >
                SIGN IN
              </BasicButton>
              <Button
                onClick={() => { navigateTo('/sign-up'); }}
                positive
              >
                SIGN UP
              </Button>
            </Menubar>
          </div>
        );
      }}
    />

  );
};

export default Header;
