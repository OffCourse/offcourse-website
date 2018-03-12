import React from 'react';
import { Tooltip } from 'react-tippy';

import Avatar from '../Avatar';

import { avatars } from './helpers';

import './style.less';

const Avatars = () => {
  return (
    <div className="Avatars">
      <div className="ui grid container">
        <div className="row">


          {avatars.map((avatar, index) => {
            if (index > 15) return false;

            return (
              <div className="four wide tablet two wide computer column">
                <a className="Avatars__item" href={`https://offcourse.io/curator/${avatar.name}`}>
                  <Tooltip
                    arrow
                    position="bottom"
                    title={avatar.name}
                  >
                    <Avatar
                      name={avatar.name}
                      imageUrl={avatar.picture}
                    />
                  </Tooltip>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Avatars;
