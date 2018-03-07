import React from 'react';
import { Button, BasicButton, Menubar } from 'offcourse-ui-components';

import ScrollWatch from '../ScrollWatch';

import './style.less';

const Header = () => {
  return (
    <ScrollWatch render={(x, y) => {
        return (
          <div className={`Header ${y > 0 ? 'scrolled' : ''}`}>
            <Menubar>
              <BasicButton>HOME</BasicButton>
              <BasicButton>JOIN</BasicButton>
              <BasicButton>COLLABORATE</BasicButton>
              <BasicButton>DONATE</BasicButton>
              <BasicButton>SIGN IN</BasicButton>
              <Button positive>SIGN UP</Button>
            </Menubar>
          </div>
        );
      }}
    />

  );
};

export default Header;
