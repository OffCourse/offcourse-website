import React from 'react';
import Img from 'gatsby-image';
import { Button } from 'offcourse-ui-components';

import CallToAction from '../components/CallToAction';
import Quote from '../components/Quote';
import PageHeader from '../components/PageHeader';
import Section from '../components/Section';


const Donate = () => {
  return (
    <div>
      <PageHeader
        title="Donate"
        subtitle="We want you to donate please please please"
      />
      <Section>
        <div className="ui middle aligned grid container">
          <div className="centered row">
            <div className="ten wide column">
              <Quote
                text="We are on a mission to make learning easily accessible. Today’s young professionals have an abundance of information and knowledge available online. They are prone to lifelong learning, but have difficulty knowing where to start and how to progress in acquiring a new skill, especially when they’re new to a topic."
              />
              <p>We bring community-driven learning to learners around the globe with our open source platform for crowdsourced learning. Members share their knowledge on any technology skill and make use of other knowledge that is already out there. We encourage people to explore, contribute, and share collections of hand-curated links to the web’s best learning resources. This way, <strong>knowledge is shared in one place and so anybody can learn what they want.</strong></p>
              <p>Offcourse is a not-for-profit organization. The learning platform we build is currently in beta stage of development. You can help us by making a donation to carry our mission forward: <strong>to bring the opportunity to learn to people everywhere.</strong></p>
            </div>
          </div>
        </div>
      </Section>

      <Section backgroundColor="offwhite">
        <CallToAction
          action={(
            <Button positive>I WANT TO MAKE A DONATION</Button>
          )}
          title="Contact us if you want to get in contact with us"

        />
      </Section>
    </div>
  );
};

export default Donate;
