import React from 'react';
import PropTypes from 'prop-types';

import './style.less';

const propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
};

const defaultProps = {
  size: 'normal',
};

const Icon = (props) => {
  const { name, size } = props;

  return (
    <i className={`Icon ${name} ${size}`} />
  );
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
