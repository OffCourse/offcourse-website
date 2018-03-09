import React from 'react';
import PropTypes from 'prop-types';

import './style.less';

const propTypes = {
  text: PropTypes.string.isRequired,
};

const Quote = (props) => {
  const { text } = props;

  return (
    <div className="Quote">
      {text}
    </div>
  );
};

Quote.propTypes = propTypes;

export default Quote;
