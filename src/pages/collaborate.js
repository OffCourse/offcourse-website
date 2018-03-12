import React from 'react';
import Img from 'gatsby-image';

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
      <PageHeader
        title="Collaborate"
        subtitle="Why you should collaborate with us"
      />
      <Section>
        <div className="ui middle aligned grid container">
          <div className="centered row">
            <div className="ten wide column">
              <p>WIP</p>
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
                <div className="four wide tablet two wide computer column">
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
          title="Contact us if you want to get in contact with us"

        />
      </Section>
    </div>
  );
};

export default Collaborate;

export const query = graphql`
  query CollaborateImageQuery {
    codeRotterdam: imageSharp(id: { regex: "/../assets/img/logos/code_rotterdam.png/" }) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
    jinc: imageSharp(id: { regex: "/../assets/img/logos/jinc.png/" }) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
    microsoft: imageSharp(id: { regex: "/../assets/img/logos/microsoft.png/" }) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
    newDutchSchool: imageSharp(id: { regex: "/../assets/img/logos/new_dutch_school.png/" }) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
    rawdata: imageSharp(id: { regex: "/../assets/img/logos/rawdata.jpeg/" }) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
    rotterdamPartners: imageSharp(id: { regex: "/../assets/img/logos/rotterdam_partners.jpeg/" }) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
    waag: imageSharp(id: { regex: "/../assets/img/logos/waag.png/" }) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
    wetech: imageSharp(id: { regex: "/../assets/img/logos/wetech.png/" }) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
