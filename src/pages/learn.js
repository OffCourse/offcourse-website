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
      skills: ['data science', 'finance', 'strategy'],
      image: data.sander,
    },

    {
      name: 'Kelly Sinterniklaas',
      tagline: 'Ambassador of Buzz',
      skills: ['marketing', 'communication', 'copywriting'],
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
      skills: ['industrial design'],
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
        title="Learn"
        subtitle="Start your learning journey with Offcourse"
      />
      <Section>
        <div className="ui middle aligned grid container">
          <div className="centered row">
            <div className="sixteen wide tablet ten wide computer column">
              <p>It's not where you're from, it's where you want to be. So why wait? Kick-start your own professional development with Offcourse. Because if we all start assembling and sharing our newfound knowledge with one another, we'll all be able to learn and develop any skill we  want. Join our community and discover why open collaboration works.</p>
              <p>Offcourse focuses on 21st Century Skills such as design, entrepreneurship and programming. We don't believe in 6 year curricula, boring lectures, and one-size-fits-all courses. Instead, you assemble new knowledge and develop your skills, bit by bit, until you're ready to share that newfound knowledge with the Offcourse community.</p>
            </div>
          </div>
        </div>
      </Section>
      <Section backgroundColor="offwhite">
        <div className="ui middle aligned stackable grid container">
          <div className="row">
            <div className="eight wide column">
              <Quote
                text="If everybody shares what they know in one place, anybody can learn what they want. That is what Offcourse envisions, and why this community supports open collaboration."
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
      <Section>
        <CallToAction
          action={(
            <div>
              <button
                type="button"
                className="ui huge button positive"
                onClick={() => { navigateTo(https://app.offcourse.io/flags/all); }}
               >
                 START LEARNING
              </button>
              <br /><br />
              <p className="c-grey">and follow us on <a href="https://twitter.com/offcourse_">Twitter</a> and  <a href="https://www.linkedin.com/company/7962249/">LinkedIn</a> and show your appreciation with #offcourse and #crowdlearning.</p>
            </div>
          )}
          title="Start learning"
        />
      </Section>
      <Section
        backgroundColor="offwhite"
        title="Our Band of Misfits"
        subtitle="We are a group of people who share the same idea. We may not all share the same backgrounds or levels, but what we have in common is that we are a band of misfits. A group of people who are choosing a radical approach to learning."
      >

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
