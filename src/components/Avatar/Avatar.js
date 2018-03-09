import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.less';

const propTypes = {
  imageUrl: PropTypes.string.isRequired,
  username: PropTypes.string,
};

const defaultProps = {
  username: '',
};

const Avatar = (props) => {
  const { imageUrl, username } = props;
  return (
    <div className="Avatar">
      <img className="Avatar__img" src={imageUrl} alt={username} />
    </div>
  );
};

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
