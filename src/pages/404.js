import React from 'react';
import Link, { navigateTo } from 'gatsby-link';
import Helmet from 'react-helmet';
import { Button } from 'offcourse-ui-components';

import CallToAction from '../components/CallToAction';
import ContactForm from '../components/ContactForm';
import Section from '../components/Section';


const NotFound = () => {
  return (
    <div>
      <Helmet
        title="404 | Offcourse"
        meta={[
          { name: 'description', content: 'Offcourse is an open source platform for crowdsourced learning and knowledge sharing.' },
        ]}
      />
      <Section hasFullHeight>
        <div className="ui middle aligned grid container">
          <div className="centered row">
            <div className="sixteen wide tablet eight wide computer column">
              <h1 className="text-center blown-up">404</h1>
            </div>
            <div className="sixteen wide tablet eight wide computer column">
              <h1>Oops!</h1>
              <h2>We can't seem to find the page you are looking for</h2>
            </div>

          </div>
        </div>
      </Section>
    </div>
  );
};

export default NotFound;
