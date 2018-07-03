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
        subtitle="How to make a donation to the Offcourse project"
      />
      <Section>
        <div className="ui middle aligned grid container">
          <div className="centered row">
            <div className="sixteen wide tablet ten wide computer column">
              <Quote
                text="Offcourse's mission is to turn talents into professionals. We offer them tools to develop 21st Century Skills, such as design, entrepreneurship and programming."
              />

              <p>It is our aim to make learning accessible to people around the globe and put an end to <strong>talent waste</strong>. We offer a platform where learners of all shapes and sizes can optimize their personal learning process. You, as individual or as organization, can contribute to this initiative.</p>
              <p>Offcourse is a not-for-profit organization. We offer our platform's users tools to develop 21st Century Skills, such as design, entrepreneurship and programming which help talents turn into professionals. The learning platform we have built is continuously evolving. </p>
              <p>Help us by contributing to our project. Support our development by giving a star on our GitHub repository so we can become an Open Collective. This allows us to raise funds for further development of Offcourse, while maintaining full and complete transparancy towards our community. More information on this can be found on our GitHub.</p>
              <p>If you are a developer, designer or blogger, there are other ways you can contribute to Offcourse as well. Check out the Build page to learn more about these possibilities. </p>
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
