import React from 'react';
import PropTypes from 'prop-types';

import './style.less';

const propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
}

const defaultProps = {
  subtitle: '',
}

const PageHeader = (props) => {
  const { subtitle, title } = props;

  return (
    <div className="PageHeader">
      <h1 className="PageHeader__title">{title}</h1>
      {subtitle && <h2 className="PageHeader__subtitle">{subtitle}</h2>}
    </div>
  );
};

PageHeader.propTypes = propTypes;
PageHeader.defaultProps = defaultProps;

export default PageHeader;
