import React from 'react';
import PropTypes from 'prop-types';

import './style.less';

const propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  hasFullHeight: PropTypes.bool,
  subtitle: PropTypes.string,
  title: PropTypes.string,
};

const defaultProps = {
  backgroundColor: 'white',
  subtitle: '',
  title: '',
};

const Section = (props) => {
  const {
    backgroundColor,
    children,
    hasFullHeight,
    subtitle,
    title,
  } = props;

  return (
    <section className={`Section ${backgroundColor} ${hasFullHeight ? 'full-height' : ''}`}>

      {(subtitle || title) &&
        <div className="Section__header">
          {title &&
            <div className="ui grid container">
              <div className="centered row">
                <div className="sixteen wide tablet ten wide computer center aligned column">
                  <h1 className="Section__header-title">{title}</h1>
                  {subtitle && <p>{subtitle}</p>}
                </div>
              </div>
            </div>
          }        
        </div>
      }

      {children}
    </section>
  );
};

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;

export default Section;
