import React from 'react';
import Img from 'gatsby-image';
import Helmet from 'react-helmet';

import CallToAction from '../components/CallToAction';
import ContactForm from '../components/ContactForm';
import PageHeader from '../components/PageHeader';
import Section from '../components/Section';


const Collaborate = (props) => {
  const { data } = props;
  const partners = [
    'dashboard1',
    'dashboard2',
    'dashboard3',
  ];

  return (
    <div>
      <Helmet
        title="Dashboards | Offcourse"
        meta={[
          { name: 'description', content: 'Offcourse is an open source platform for crowdsourced learning and knowledge sharing.' },
        ]}
      />
      <PageHeader
        title="Dashboard"
        subtitle="For NSVP subsidy application"
      />
      
      <Section
        title="Designs for our dashboard"
      >
        <div className="ui grid container">
          <div className="middle aligned row">

            {partners.map((partner) => {
              const image = data[partner];

              return (
                <div className="sixteen wide column">
                  <Img
                    sizes={image.sizes}
                  />
                </div>
              );
            })}

          </div>
        </div>
      </Section>

      <Section backgroundColor="offwhite">
        <CallToAction
          action={(
            <ContactForm />
          )}
          title="Contact us"

        />
      </Section>
    </div>
  );
};

export default Collaborate;

export const query = graphql`
  query DashboardImageQuery {
    dashboard1: imageSharp(id: { regex: "/../assets/img/mockups/Dashboard1.jpg/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes
      }
    }
    dashboard2: imageSharp(id: { regex: "/../assets/img/mockups/Dashboard2.jpg/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes
      }
    }
    dashboard3: imageSharp(id: { regex: "/../assets/img/mockups/Dashboard3.jpg/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
