import React from 'react';
import Img from 'gatsby-image';
import { Button } from 'offcourse-ui-components';
import Helmet from 'react-helmet';

import CallToAction from '../components/CallToAction';
import Quote from '../components/Quote';
import PageHeader from '../components/PageHeader';
import Section from '../components/Section';


const Donate = () => {
  return (
    <div>
      <Helmet
        title="Donate | Offcourse"
        meta={[
          { name: 'description', content: 'Offcourse is an open source platform for crowdsourced learning and knowledge sharing.' },
        ]}
      />
      <PageHeader
        title="Donate"
        subtitle="Another way to contribute"
      />
      <Section>
        <div className="ui middle aligned grid container">
          <div className="centered row">
            <div className="sixteen wide tablet ten wide computer column">
              <Quote
                text="Offcourse's mission is to turn talents into professionals. We offer them tools to develop 21st Century Skills, such as design, entrepreneurship and programming."
              />

              <p>Today, professional education offers 6 year curricula, expensive courses, and one-size-fits-all courses. Many talents worldwide don't have the time or money to follow such programs. It is our aim to make learning accessible to people around the globe and put an end to <strong>talent waste</strong>.</p>
              <p>Our platform helps learners of all shapes and sizes to improve their learning. We provide a space where the web's best learning resources can be stored and shared. We encourage our community to explore, contribute, and share collections of hand-curated links.</p>
              <p>Offcourse is a not-for-profit organization. The learning platform we build is continuously under development. You can help us by making a donation to carry our mission forward.</p>

            </div>
          </div>
        </div>
      </Section>

      <Section backgroundColor="offwhite">
        <CallToAction
          action={(
            <Button positive>DONATE</Button>
          )}
          title="Support us by making a donation"

        />
      </Section>
    </div>
  );
};

export default Donate;
