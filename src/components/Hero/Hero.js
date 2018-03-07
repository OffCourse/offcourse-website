import React from 'react';
import PropTypes from 'prop-types';

import './style.less';

const propTypes = {
  backgroundImage: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

const defaultProps = {
  backgroundImage: undefined,
};

const Hero = (props) => {
  const { backgroundImage, children } = props;

  return (
    <div className="Hero">
      {backgroundImage &&
        <div
          className="Hero__background-image"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
      }
      {children}
    </div>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
