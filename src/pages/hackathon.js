import React from 'react';
import Img from 'gatsby-image';
import Helmet from 'react-helmet';

import CallToAction from '../components/CallToAction';
import ContactForm from '../components/ContactForm';
import PageHeader from '../components/PageHeader';
import Section from '../components/Section';


const Hackathon = (props) => {
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
        title="Hackathon | Offcourse"
        meta={[
          { name: 'description', content: 'Offcourse is an open source platform for crowdsourced learning and knowledge sharing.' },
        ]}
      />
      <PageHeader
        title="Hackathon"
        subtitle="Wicked problem series"
      />
      <Section>
        <div className="ui middle aligned grid container">
          <div className="centered row">
            <div className="sixteen wide tablet ten wide computer column">
              <p>We live in a world filled with many 'wicked problems'. These are everyday struggles that seen to be difficult or impossible to solve because of their overlapping nature to various social and cultural issues. For example, poverty is both a cause and consequence of the lack of education, but so is money and oppurtunity.</p>
              <p>In a world that is ever growing, ever dynamic and ever changing, employment has become a concerning aspect in many peoples lives. Many even blame technology for the increase of unemployment, which could be true but is this generally the case? This hackathon will help determine whether technology is a friend or foe?</p>
              <h1>Challenges</h1>
              <h2>1. Local Challenge</h2>
              <h3>Problem:</h3>
              <p>Due to employees seeking the best jobs, talented individuals migrate from metropolitan/ urban areas because of the lack of jobs. People now commute to further locations which becomes a great inconvenience for themselves and others. Consequences of this change include stress, fatigue and environmental pollution.</p>
              <h3>Sample idea:</h3>
              <p>Using Offcourse.io open-source code, create an integrated tool that offers a "job switch" between 2 individuals, from different locations but feature the same level and skill-set. Users would have to sign-up and create a profile outlining their soft and hard skills which is then processed by the tool. </p>
              <h2>2. Organizational Challenge</h2>
              <h3>Problem:</h3>
              <p>Skilled professionals leave their employers in search for opportunities that bring new challenges and help them grow. This is because workers are using their skills at a mediocre level and thus experience low levels of productivity due to instability, lack of motivation or boredom. The loss of skilled workers greatly impacts the skill-set and knowledge of companies as a whole. This loss affects their bottomline with training and recruitment processes.</p>
              <h3>Sample idea:</h3>
              <p>Offcourse.io stands as an open-source and free knowledge-sharing platform. This platform can be a useful tool for the employees to use for learning and self-development. Moreover, it can used both by individual users but also cooperate entities.</p>
              <h2>3. Personal Challenge</h2>
              <h3>Problem:</h3>
              <p>You have skills and/or talent that you would like to develop and put into practice. However, the traditional curricula does not support your learning style, material is inaccessible and the process of learning is long before you can reap the rewards.</p>
              <h3>Sample idea:</h3>
              <p>Offcourse.io is a mediator tool between open-knowledge available on the internet and end users (you). Through Offcourse.io open-source code create a tool that outlines a reward system for its users. This will function on the different levels a user has obtained for completing the curricula. This is not a controlled feature, but rather a tool which will help measure and determine one's level in a given sector/topic/expertise.</p>
              <h1>Partners</h1>
              <h2>Universities</h2>
              <ol>
                <li>Leiden University</li>
                  <p>https://www.universiteitleiden.nl/en/about-us/contact</p>
                <li>TU Delft (Delft University of Technology)</li>
                  <p>https://www.tudelft.nl/en/about-tu-delft/contact-and-accessibility/</p>
                <li>Erasmus University</li>
                  <p>https://www.eur.nl/en/contact</p>
              </ol>
              <h2>Organizations and Associations</h2>
              <ol>
                <li>PixelBar Hackerspace</li>
                  <p>bestuur@pixelbar.nl</p>
                <li>Dot Control</li>
                  <p>https://dotcontrol.com/About-us/</p>
                <li>Tech Meetups within 25 miles of Rotterdam</li>
                  <p>https://www.meetup.com/cities/nl/rotterdam/tech/</p>
                <li>Mobility Lab - Rotterdam</li>
                  <p>http://www.mobilitylab.nl/</p>
                <li>TEC ART Rotterdam</li>
                  <p>https://2018.tecart.nl/info/partners-support/</p>
                <li>World Port Hackathon</li>
                  <p>https://worldporthackathon.com/partners/</p>
              </ol>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Hackathon;

export const query = graphql`
  query HackathonImageQuery {
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
