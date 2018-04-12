import React, { Component } from 'react';
import { Button } from 'offcourse-ui-components';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const propTypes = {
  profile: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.object.isRequired,
  }).isRequired,
};

const ProfileCard = (props) => {
  const { profile } = props;

  return (
    <div className="ui card">
      <section
        section="header"
        className="content"
      >
        <h1 section="header" className="header">{profile.tagline}</h1>
      </section>

      <section
        section="meta"
        className="content"
      >

        {profile.image && profile.image.sizes &&
          <div className="image">
            <Img
              sizes={profile.image.sizes}
            />
          </div>
        }

        <div className="meta">
          Misfit
        </div>

        <div className="header">
          <a className="curator-info" href="#">{profile.name}</a>
        </div>
      </section>

      <section
        section="tags"
        className="content"
      >
        <div className="ui labels">
          {profile.skills.map(skill => (
            <a key={skill} href="#" className="ui mini label">{skill}</a>
          ))}
        </div>
      </section>
    </div>
  );
};

ProfileCard.propTypes = propTypes;

export default ProfileCard;
