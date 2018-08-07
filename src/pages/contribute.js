import React from 'react';
import Img from 'gatsby-image';
import Helmet from 'react-helmet';

import CallToAction from '../components/CallToAction';
import ContactForm from '../components/ContactForm';
import PageHeader from '../components/PageHeader';
import Section from '../components/Section';


const Contribute = (props) => {
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
        subtitle="How you can practice your skills by contributing to the platform"
      />
      <Section>
        <div className="ui middle aligned grid container">
          <div className="centered row">
            <div className="sixteen wide tablet ten wide computer column">
              <p>You can help us expand the Offcourse platform and its community. If you support openness, ownership and collaboration as much as we do, we invite you to contribute to our initiative and share with others how Ofccourse helped you.</p>
              <p>Here are a few ways you can help this community grow:</p>
              <ul>
                <li>share code as open source (all developer levels)</li>
                <li>help us expand the movement by writing about Offcourse</li>
                <li>publish articles on how you gained knowledge and developed new skills by using this platform</li>
                <li>help us design and further develop the platform</li>
                <li>mentor new developers within the community</li>
                <li>give a talk about Offcourse at events</li>
                <li>let us know if you have any other ideas on how you'd like to contribute</li>
              </ul>

            </div>
          </div>
        </div>
      </Section>

      <Section backgroundColor="offwhite">
        <CallToAction
          action={(
            <ContactForm />
          )}
          title="Contact us if you're interested and excited to join!"

        />
      </Section>
    </div>
  );
};

export default Contribute;
