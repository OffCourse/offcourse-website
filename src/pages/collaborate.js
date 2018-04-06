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
    'codeRotterdam',
    'jinc',
    'microsoft',
    'newDutchSchool',
    'rawdata',
    'rotterdamPartners',
    'waag',
    'wetech',
  ];

  return (
    <div>
      <Helmet
        title="Collaborate | Offcourse"
        meta={[
          { name: 'description', content: 'Offcourse is an open source platform for crowdsourced learning and knowledge sharing.' },
        ]}
      />
      <PageHeader
        title="Collaborate"
        subtitle="Why you should collaborate with us"
      />
      <Section>
        <div className="ui middle aligned grid container">
          <div className="centered row">
            <div className="ten wide column">
              <p>Offcourse's mission is to turn talents into professionals. Our platform helps learners of all shapes and sizes to improve their learning and to create a space for people to share knowledge. We are open to partnering with knowledge institutions of different kinds to make this mission work. Institutions who aim to have a societal impact in the area of knowledge sharing and/or learning are partners we are happy to work with.</p>
              <p>In addition to partners to e.g. share knowledge or organise events with, we also partner with teams that are in need of tooling for which Offcourse is suitable. You can therefore also contact us for partnership opportunities if you are looking for a better tool for communication, learning, documentation, and knowledge sharing.</p>
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
                <div className="four wide tablet column">
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
          title="Become a partner"

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
    waag: imageSharp(id: { regex: "/../assets/img/logos/waag.png/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
    wetech: imageSharp(id: { regex: "/../assets/img/logos/wetech.png/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
