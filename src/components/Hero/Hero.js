import React from 'react';
import PropTypes from 'prop-types';

import './style.less';

const propTypes = {
  backgroundColor: PropTypes.string,
  backgroundImage: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

const defaultProps = {
  backgroundColor: undefined,
  backgroundImage: undefined,
};

const Hero = (props) => {
  const { backgroundColor, backgroundImage, children } = props;

  return (
    <div className={`Hero ${backgroundColor}`}>
      {backgroundImage && !backgroundColor &&
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
