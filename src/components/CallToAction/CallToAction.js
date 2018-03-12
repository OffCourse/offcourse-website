import React from 'react';
import PropTypes from 'prop-types';

import './style.less';

const propTypes = {
  action: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  title: PropTypes.string.isRequired,
}

const CallToAction = (props) => {
  const { action, title } = props;

  return (
    <div className="CallToAction">
      <div className="ui grid container">
        <div className="ui centered row">
          <div className="sixteen wide tablet ten wide computer center aligned column">
            <h3>{title}</h3>
          </div>
        </div>
        <div className="ui centered row">
          <div className="sixteen wide tablet ten wide computer center aligned column">
            {action}
          </div>
        </div>
      </div>
    </div>
  );
};

CallToAction.propTypes = propTypes;

export default CallToAction;
