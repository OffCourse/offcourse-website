import React from 'react';
import { Embed } from 'semantic-ui-react';
import { Button } from 'offcourse-ui-components';
import Helmet from 'react-helmet';
import { navigateTo } from 'gatsby-link';

import CallToAction from '../components/CallToAction';
import Quote from '../components/Quote';
import PageHeader from '../components/PageHeader';
import ProfileCard from '../components/ProfileCard';
import Section from '../components/Section';


const JoinPage = (props) => {
  const { data } = props;
  const misfits = [
    {
      name: 'Jan Hein Hoogstad',
      tagline: 'Maker and Chief',
      skills: ['programming', 'entrepreneurship', 'problem solving', 'critical thinking'],
      image: data.yeehaa,
    },

    {
      name: 'Birgit Vene',
      tagline: 'Creator of Opportunities',
      skills: ['project management', 'collaboration', 'critical thinking', 'community building'],
      image: data.birgit,
    },

    {
      name: 'Sander Reukema',
      tagline: 'Reasoner',
      skills: ['data science', 'finance'],
      image: data.sander,
    },

    {
      name: 'Kelly Sinterniklaas',
      tagline: 'Ambassador of Buzz',
      skills: ['marketing', 'communicatie', 'copywriting'],
      image: data.kelly,
    },

    {
      name: 'Charlotte van Oostrum',
      tagline: 'Identifier of Companionships',
      skills: ['strategy consulting', 'community development', 'content management'],
      image: data.charlotte,
    },

    {
      name: 'Christine Furst',
      tagline: 'Visualizer',
      skills: ['photography'],
      image: data.christine,
    },

    {
      name: 'Loek Hendriks',
      tagline: 'Enthusiastic Engineer ',
      skills: ['industrial engineering'],
      image: data.loek,
    },

    {
      name: 'Martijn Howling',
      tagline: 'Pretty Maker',
      skills: ['web design', 'entrepreneurship'],
      image: data.martijn,
    },

    {
      name: 'Joris de Ruiter',
      tagline: 'Creator of Things',
      skills: ['web & app development', 'entrepreneurship', 'online marketing'],
      image: data.joris,
    },
  ];

  return (
    <div>
      <Helmet
        title="Join | Offcourse"
        meta={[
          { name: 'description', content: 'Offcourse is an open source platform for crowdsourced learning and knowledge sharing.' },
        ]}
      />
      <PageHeader
        title="Join"
        subtitle="Why you should join us"
      />
      <Section>
        <div className="ui middle aligned grid container">
          <div className="centered row">
            <div className="sixteen wide tablet ten wide computer column">
              <p>It's not where you're from, it's where you want to be. This is the principle of our open source learning platform. If we share what we know, and collect that knowledge in one place, we all learn from each other and we can grow our skills in the area we want. That is why we support open source and open knowledge.</p>
              <p>Our aim is to help you grow as a professional. Offcourse focuses on 21st Century Skills, such as design, entrepreneurship and programming. We don't believe in 6 year curricula, long, boring lectures, and one-size-fits-all courses. Instead you assemble your skills bit by bit. When you're ready, share that newfound knowledge back with the Offcourse community.</p>
            </div>
          </div>
        </div>
      </Section>
      <Section backgroundColor="offwhite">
        <CallToAction
          action={(
            <div>
              <Button positive onClick={() => { navigateTo('/sign-up'); }}>JOIN</Button>
              <br /><br />
              <p className="c-grey">or follow us on <a href="https://twitter.com/offcourse_">Twitter</a> and  <a href="https://www.linkedin.com/company/7962249/">LinkedIn</a> and show your appreciation with #offcourse and #crowdlearning.</p>
            </div>
          )}
          title="Join offcourse now"
        />
      </Section>
      <Section>
        <div className="ui middle aligned stackable grid container">
          <div className="row">
            <div className="eight wide column">
              <Quote
                text="If everybody shares what they know in one place, anybody can learn what they want. That is what all members of the Offcourse community believe in and why we support open collaboration."
              />
            </div>
            <div className="eight wide column">
              <Embed
                id="236074239"
                placeholder="https://i.vimeocdn.com/video/658064450.webp?mw=2000&mh=1125&q=70"
                source="vimeo"
              />
            </div>
          </div>
        </div>
      </Section>
      <Section
        backgroundColor="offwhite"
        title="Our Band of Misfits"
        subtitle="We are a group of people who share the same beliefs, not necessarily the same (educational) backgrounds or levels. What we have in common is that we are a band of misfits - we have a different view on education and learning from the traditional system."
      >

        <div className="ui middle aligned grid container">
          <div className="centered row">
            <div className="ten wide center aligned column">
              <h2>Each with their own set of skills</h2>
            </div>
          </div>
        </div>


        <div className="ui stackable grid container">
          <div className="row">
            {misfits.map((misfit, index) => {
              return (
                <div
                  key={index}
                  className="sixteen wide mobile eight wide tablet four wide computer column"
                  style={{
                    // Make font sizes in CourseCard smaller to match app's sizes
                    fontSize: '0.7em',
                    marginBottom: '1rem',
                  }}
                >
                  <ProfileCard profile={misfit} />
                </div>

              );
            })}

          </div>
        </div>

      </Section>
    </div>
  );
};

export default JoinPage;

export const query = graphql`
  query JoinImageQuery {
    yeehaa: imageSharp(id: { regex: "/../assets/img/misfits/yeehaa.jpg/" }) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
    birgit: imageSharp(id: { regex: "/../assets/img/misfits/birgit.jpg/" }) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
    sander: imageSharp(id: { regex: "/../assets/img/misfits/sander.jpg/" }) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
    kelly: imageSharp(id: { regex: "/../assets/img/misfits/kelly.jpg/" }) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
    charlotte: imageSharp(id: { regex: "/../assets/img/misfits/charlotte.jpg/" }) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
    christine: imageSharp(id: { regex: "/../assets/img/misfits/christine.jpg/" }) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
    loek: imageSharp(id: { regex: "/../assets/img/misfits/loek.jpg/" }) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
    martijn: imageSharp(id: { regex: "/../assets/img/misfits/martijn.jpg/" }) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
    joris: imageSharp(id: { regex: "/../assets/img/misfits/joris.jpg/" }) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
