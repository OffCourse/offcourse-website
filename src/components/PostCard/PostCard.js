import React from 'react';
import PropTypes from 'prop-types';
import Link, { navigateTo } from 'gatsby-link';
import Img from 'gatsby-image';
import { Button } from 'offcourse-ui-components';

import './style.less';

const propTypes = {
  excerpt: PropTypes.string.isRequired,
  featuredImage: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const defaultProps = {
  featuredImage: undefined,
};

const PostCard = (props) => {
  const { excerpt, featuredImage, slug, title } = props;

  return (
    <div className="PostCard">
      <div className="Postcard__img">
        <Img sizes={{...featuredImage.childImageSharp.sizes, aspectRatio: 16 / 9 }} />
      </div>

      <div className="PostCard__body">
        <Link to={slug}>
          <h3>{title}</h3>
          <p>{excerpt}</p>
        </Link>
        <Button
          positive
          onClick={() => { navigateTo(slug); }}
        >
          READ MORE
        </Button>
      </div>

    </div>
  );
};

PostCard.propTypes = propTypes;
PostCard.defaultProps = defaultProps;

export default PostCard;
