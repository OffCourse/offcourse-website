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
    <section className={`Section ${backgroundColor}`}>

      {(subtitle || title) &&
        <div className="Section__header">
          {title &&
            <div className="ui centered grid">
              <div className="sixteen wide center aligned column">
                <h1 className="Section__header-title">{title}</h1>
              </div>
            </div>
          }
          {subtitle &&
            <div className="ui centered grid">
              <div className="ten wide center aligned column">
                <p>{subtitle}</p>
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
