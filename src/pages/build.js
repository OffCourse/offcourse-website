import React from 'react';
import Img from 'gatsby-image';
import Helmet from 'react-helmet';

import CallToAction from '../components/CallToAction';
import ContactForm from '../components/ContactForm';
import PageHeader from '../components/PageHeader';
import Section from '../components/Section';


const Build = (props) => {
  return (
    <div>
      <Helmet
        title="Build | Offcourse"
        meta={[
          { name: 'description', content: 'Offcourse is an open source platform for crowdsourced learning and knowledge sharing.' },
        ]}
      />
      <PageHeader
        title="Build"
        subtitle="How you can contribute to the platform"
      />
      <Section>
        <div className="ui middle aligned grid container">
          <div className="centered row">
            <div className="ten wide column">
              <p>You can help us build the Offcourse platform and its community further. If you support our view that learning should be accessible to people around the globe and that the way we learn can be optimised, and you support the principles of openness, ownership and collaboration, we invite you to contribute. Here are some examples of how you can contribute:</p>

              <ul>
                <li>contribute open source code (all developer levels)</li>
                <li>help grow our movement by writing about us</li>
                <li>share your personal learning story through Offcourse</li>
                <li>help design the platform</li>
                <li>mentor developers within the community</li>
                <li>speak about us at events</li>
                <li>bring in your own ideas on how you want to contribute</li>
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

export default Build;
