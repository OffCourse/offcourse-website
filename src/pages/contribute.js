import React from 'react';
import Img from 'gatsby-image';
import { Button } from 'offcourse-ui-components';
import Helmet from 'react-helmet';

import CallToAction from '../components/CallToAction';
import Quote from '../components/Quote';
import PageHeader from '../components/PageHeader';
import Section from '../components/Section';


const Contribute = () => {
  return (
    <div>
      <Helmet
        title="Contribute | Offcourse"
        meta={[
          { name: 'description', content: 'Offcourse is an open source platform for crowdsourced learning and knowledge sharing.' },
        ]}
      />
      <PageHeader
        title="Contribute"
        subtitle="How to contribute to the Offcourse project"
      />
      <Section>
        <div className="ui middle aligned grid container">
          <div className="centered row">
            <div className="sixteen wide tablet ten wide computer column">
              <Quote
                text="Offcourse's mission is to turn talents into professionals. We offer them tools to develop 21st Century Skills, such as design, entrepreneurship and programming."
              />

              <p>Today, professional education offers 6 year curricula, expensive courses, and one-size-fits-all courses. Many talents worldwide don't have the time or money to follow such programs. It is our aim to make learning accessible to people around the globe and put an end to <strong>talent waste</strong>.</p>
              <p>Our platform helps learners of all shapes and sizes to improve their learning. We provide a space where the web's best learning resources can be stored and shared. A space for optimal and personalized learning.</p>
              <p>Offcourse is a not-for-profit organization. The learning platform we build is continuously under development. You can help us by supporting our project. Support us by giving a star on our GitHub repository so we can become an Open Collective. This allows Offcourse to raise funds for development, while being in full transparency with our community. More information on this can be found on our GitHub. </p>
              <p>If you are a developer, designer or blogger, there are other ways you can contribute to Offcourse as well. Have a look on our build page for the possibilities. </p>
            </div>
          </div>
        </div>
      </Section>

      <Section backgroundColor="offwhite">
        <CallToAction
          action={(
            <Button
              positive
              onClick={() => {
                window.location.href = 'https://github.com/OffCourse/offcourse-next';
              }}
            >
              GIVE A STAR
            </Button>
          )}
          title="Support us by giving a star on our GitHub"
          subtitle="Our goal is to reach 100 stars to become an Open Collective project"
        />
      </Section>
    </div>
  );
};

export default Contribute;
