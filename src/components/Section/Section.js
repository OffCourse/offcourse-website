import React from 'react';
import PropTypes from 'prop-types';

import './style.less';

const propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  subtitle: PropTypes.string,
  title: PropTypes.string,
};

const defaultProps = {
  backgroundColor: 'white',
  subtitle: '',
  title: '',
};

const Section = (props) => {
  const { backgroundColor, children, subtitle, title } = props;

  return (
    <div className={`Section ${backgroundColor}`}>

      {(subtitle || title) &&
        <div className="Section__header">
          {title && <h2 className="Section__header-title">{title}</h2>}
          {subtitle && <p>{subtitle}</p>}
        </div>
      }

      {children}
    </div>
  );
};

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;

export default Section;
