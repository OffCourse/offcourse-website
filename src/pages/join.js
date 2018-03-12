import React from 'react';
import { Embed } from 'semantic-ui-react';
import { Button } from 'offcourse-ui-components';

import Avatars from '../components/Avatars';
import CallToAction from '../components/CallToAction';
import Quote from '../components/Quote';
import PageHeader from '../components/PageHeader';
import Section from '../components/Section';


const JoinPage = () => {
  return (
    <div>
      <PageHeader
        title="Join"
        subtitle="Why you should join us"
      />
      <Section>
        <div className="ui middle aligned <stackable></stackable> grid container">
          <div className="row">
            <div className="eight wide column">
              <Quote
                text="If everybody shares what they know in one place, anybody can learn what they want. That is what all members of the Offcourse community believe in and why we support open collaboration."
              />
            </div>
            <div className="eight wide column">
              <Embed
                id="236074239"
                placeholder="https://i.vimeocdn.com/video/658064450.webp?mw=2000&mh=1125&q=70"
                source="vimeo"
              />
            </div>
          </div>
        </div>
      </Section>
      <Section
        backgroundColor="offwhite"
      >
        <div className="ui middle aligned grid container">
          <div className="centered row">
            <div className="sixteen wide tablet ten wide computer column">
              <p>Together we share skills, develop them and acquire new ones. We want you to be able to acquire as well as to share your skill set that helps you grow as a new professional. To assemble these according to your own style and preferences, in a community of like-minded people, which is an alternative way of learning.</p>
              <p>We support you as new professional in your journey in UI/UX, design or programming - the technology skills of the future. And that future is our own, we are the future workforce. That is why open collaboration is the basis of our community. Join us if you believe in this approach to the idea of learning and share what you know.</p>
            </div>
          </div>
        </div>
      </Section>
      <Section
        title="We are a community of assemblers"
        subtitle="Each with their own set of skills"
      >

        <Avatars />
      </Section>

      <Section>
        <CallToAction
          action={(
            <Button positive>JOIN</Button>
          )}
          title="Join offcourse now for this and that reason"

        />
      </Section>
    </div>
  );
};

export default JoinPage;
