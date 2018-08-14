import React from 'react';
import Img from 'gatsby-image';
import Helmet from 'react-helmet';

import CallToAction from '../components/CallToAction';
import ContactForm from '../components/ContactForm';
import PageHeader from '../components/PageHeader';
import Section from '../components/Section';


const Partners = (props) => {
  const { data } = props;
  const partners = [
    'codeRotterdam',
    'jinc',
    'microsoft',
    'newDutchSchool',
    'rawdata',
    'rotterdamPartners',
    'waag',
    'wetech',
    'bureau Moeilijke Dingen',
  ];

  return (
    <div>
      <Helmet
        title="Partners | Offcourse"
        meta={[
          { name: 'description', content: 'Offcourse is an open source platform for crowdsourced learning and knowledge sharing.' },
        ]}
      />
      <PageHeader
        title="Partners"
        subtitle="Possibilities for collaboration"
      />
      <Section>
        <div className="ui middle aligned grid container">
          <div className="centered row">
            <div className="sixteen wide tablet ten wide computer column">
              <p>Offcourse helps eager minds around the world gain new knowledge, develop and improve their skills, and share what they've learned. If you share the same vision, we invite you to join forces and help professionals and organizations grow through knowledge development and knowledge sharing. We welcome all kinds of knowledge institutions and organizations with an impact on society that like to help us achieve our goal by organizing events together or sharing resources.</p>
              <p>You can also contact us if you are looking for better communication, learning, documentation, and knowledge sharing tools and feel that Offcourse may be of help.</p>
            </div>
          </div>
        </div>
      </Section>
      <Section
        title="Partners that are already in for the ride"
      >
        <div className="ui grid container">
          <div className="middle aligned row">

            {partners.map((partner) => {
              const image = data[partner];

              return (
                <div className="eight wide tablet four wide computer column">
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
  query CollaborateImageQuery {
    codeRotterdam: imageSharp(id: { regex: "/../assets/img/logos/code_rotterdam.png/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
    jinc: imageSharp(id: { regex: "/../assets/img/logos/jinc.png/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
    microsoft: imageSharp(id: { regex: "/../assets/img/logos/microsoft.png/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
    newDutchSchool: imageSharp(id: { regex: "/../assets/img/logos/new_dutch_school.png/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
    rawdata: imageSharp(id: { regex: "/../assets/img/logos/rawdata.png/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
    rotterdamPartners: imageSharp(id: { regex: "/../assets/img/logos/rotterdam_partners.png/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
    waag: imageSharp(id: { regex: "/../assets/img/logos/waag-logo.png/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
    wetech: imageSharp(id: { regex: "/../assets/img/logos/wetech.png/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
    rawdata: imageSharp(id: { regex: "/../assets/img/logos/moeilijke-dingen.png/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
