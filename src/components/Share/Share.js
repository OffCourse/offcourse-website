import React from 'react';
import PropTypes from 'prop-types';

import { share } from './helpers';

import './style.less';

const propTypes = {
  text: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

const defaultProps = {
  text: 'Share',
};

const Share = (props) => {
  const { text, title, url } = props;

  return (
    <div className="ui horizontal list">
      <div className="item">
        <a
          onClick={() => { share(`http://www.facebook.com/sharer.php?u=${url}`); }}
        >
          <i className="Share__icon fab fa-facebook-f" />
        </a>
      </div>
      <div className="item">
        <a
          onClick={() => { share(`https://twitter.com/share?url=&${url}text=${title}`); }}
        >
          <i className="Share__icon fab fa-twitter" />
        </a>
      </div>
      <div className="item">
        <a
          onClick={() => { share(`mailto:?subject=${title}&body=${text}%0D%0A%0D%0ACheck ${url}`); }}
        >
          <i className="Share__icon far fa-envelope" />
        </a>
      </div>
    </div>
  );
};

Share.propTypes = propTypes;
Share.defaultProps = defaultProps;

export default Share;
