import React from 'react';
import { Embed } from 'semantic-ui-react';
import { Button } from 'offcourse-ui-components';
import Helmet from 'react-helmet';
import { navigateTo } from 'gatsby-link';

import Avatars from '../components/Avatars';
import CallToAction from '../components/CallToAction';
import Quote from '../components/Quote';
import PageHeader from '../components/PageHeader';
import Section from '../components/Section';


const JoinPage = () => {
  return (
    <div>
      <Helmet
        title="Join | Offcourse"
        meta={[
          { name: 'description', content: 'Offcourse is an open source platform for crowdsourced learning and knowledge sharing.' },
        ]}
      />
      <PageHeader
        title="Join"
        subtitle="Why you should join us"
      />
      <Section>
        <div className="ui middle aligned grid container">
          <div className="centered row">
            <div className="sixteen wide tablet ten wide computer column">
              <p>It's not where you're from, it's where you want to be. This is the principle of our open source learning platform. If we share what we know, and collect that knowledge in one place, we all learn from each other and we can grow our skills in the area we want. That is why we support open source and open knowledge.</p>
              <p>Our aim is to help you grow as a professional. Offcourse focuses on 21st Century Skills, such as design, entrepreneurship and programming. We don't believe in 6 year curricula, long, boring lectures, and one-size-fits-all courses. Instead you assemble your skills bit by bit. When you're ready, share that newfound knowledge back with the Offcourse community.</p>
            </div>
          </div>
        </div>
      </Section>
      <Section backgroundColor="offwhite">
        <CallToAction
          action={(
            <div>
              <Button positive onClick={() => { navigateTo('/sign-up'); }}>JOIN</Button>
              <br /><br />
              <p className="c-grey">or follow us on <a href="https://twitter.com/offcourse_">Twitter</a> and  <a href="https://www.linkedin.com/company/7962249/">LinkedIn</a> and show your appreciation with #offcourse and #crowdlearning.</p>
            </div>
          )}
          title="Join offcourse now"
        />
      </Section>
      <Section>
        <div className="ui middle aligned stackable grid container">
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
        title="Our Band of Misfits"
        subtitle="We are a group of people who share the same beliefs, not necessarily the same (educational) backgrounds or levels. What we have in common is that we are a band of misfits - we have a different view on education and learning from the traditional system."
      />
    </div>
  );
};

export default JoinPage;
