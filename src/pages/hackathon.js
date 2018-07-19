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
          {
            name: 'description',
            content:
              'Offcourse is an open source platform for crowdsourced learning and knowledge sharing.',
          },
        ]}
      />
      <PageHeader
        title="Hackathon"
        subtitle="Technology vs. Life | 21-23 September 2018 | 42 Workspace | Rotterdam"
      />
      <Section>
        <div className="ui middle aligned grid container">
          <div className="centered row">
            <div className="sixteen wide tablet ten wide computer column">
              <h2>Problem Definition</h2>
              <p>
                We live in a time where the 21st Century Skills are taking over the job market. The
                job market has never been so flexible, various and specific at the same time as it
                is now. Yet, there is lack of professionals that have specific tech, entrepreneurial
                or design skills to fill all these positions. How can we help people discover and
                develop their talent next to traditional job market skills? How can we help people
                to fill all these job offers at the market? What is the social impact of offering
                people an alternative way of learning the skills of this time?
              </p>
              <p>
                In a world that is ever growing, ever dynamic and ever changing, employment has
                become a concerning aspect in many peoples lives. Many even blame technology for the
                increase of unemployment, which could be true but is this generally the case?
              </p>
              <p>
                With our very first hackathon "Technology vs Life" we would like to contribute to
                decreasing the gap between the current job market and talent with 21st Century
                Skills from an individual, organisational and local perspective.
              </p>
              <h2>What is our Approach?</h2>
              <p>
                See below the <strong>Challenges</strong> we have created to contribute to gain more
                professionals in <strong>21st Century Skills</strong>. Fellow designers, analysts,
                coders and creatives, this is your chance to contribute by sharing your skills and
                putting your skills in practice at once!
              </p>
              <h3>Local: Talent Mapping by Creating a Profile</h3>
              <h4>What is the social issue from a "local" perspective?</h4>
              <p>
                Employees are seeking the best jobs that fit their profile. Often these jobs are
                found through their personal network, companies they know and positions they find
                online. This results in talented individuals migrating from metropolitan/ urban
                areas. People now commute to further locations which becomes a great inconvenience
                for themselves and others. Consequences of this change include stress, fatigue and
                environmental pollution. How can we contribute into solving these issues?
              </p>
              <h4>Here, an idea for an innovative solution?!</h4>
              <p>
                Using Offcourse.io open-source code, create an integrated tool that supports a "job
                switch" between 2 individuals, from different locations but feature the same level
                and skill-set. Users would have to create a profile outlining their location, soft
                and hard skills which are then processed by the tool. As a result, the tool would
                "match" you with a similar job but closer to your home.
              </p>
              <h3>Organizational: Upgrade your Profile by Developing New Skills</h3>
              <h4>What is the social issue from an "organizational" perspective?</h4>
              <p>
                Skilled professionals leave their employers in search for opportunities that bring
                new challenges and help them grow. This is because workers are using their skills at
                a mediocre level and thus experience low levels of productivity due to instability,
                lack of motivation or boredom. The loss of skilled workers greatly impacts the
                skill-set and knowledge of companies as a whole. This loss affects their bottomline
                with training and recruitment processes.
              </p>
              <h4>Here, an idea for an innovative solution?!</h4>
              <p>
                Offcourse.io is an open-source and free knowledge sharing and transfer platform. By
                using the open source code of Offcourse.io, create an integrated tool, which based
                on the current skills of the employee allows the tool to give suggestions what to
                learn next in order to upgrade their profile. Hence, makes suggestions for
                self-improvement and positions that open up after upgrading their profile.
              </p>
              <h3>Individual: Get Rewarded based on the Newly Developed Skills</h3>
              <h4>What is the social issue from an "individual" perspective?</h4>
              <p>
                You have skills and/or talent that you would like to develop and put into practice.
                However, the traditional curricula does not support your learning style, material is
                inaccessible and the process of learning is long before you can reap the rewards.
              </p>
              <h4>Here, an idea for an innovative solution?!</h4>
              <p>
                Offcourse.io is a mediator tool between open-knowledge available on the internet and
                end users (you). Through Offcourse.io open-source code create a tool that outlines a
                reliable reward system for its users. This will function on the different levels a
                user has obtained for completing the curricula. This is not a controlled feature,
                but rather a tool which will help measure and determine one's level in a given
                sector/topic/expertise.
              </p>
              <div>
                <p>
                  <u>Did we trigger your attention?! do you feel like you'd like to contribute?</u>
                </p>
                <h2>How can you participate?</h2>
                <h3>Hackers</h3>
                <p>
                  Want to part of the competition, work in a team and show case your skills?{' '}
                  <a
                    href="https://www.eventbrite.com/e/hackathon-technology-vs-life-tickets-48028507559"
                    target="_blank"
                  >
                    <u>GET YOUR FREE TICKET HERE!</u>
                  </a>
                </p>
                <h4>Who is our ideal participant?</h4>
                <p>
                  <strong>Everyone!</strong> We are open to all candidates that showcase one or more
                  of the following skills:
                </p>
                <ul>
                  <li>Enthusiastic about solving problems and working in a team</li>
                  <li>Creative in any way</li>
                  <li>Experience with Java script</li>
                  <li>Experience in Front/ Backend</li>
                  <li>At ease with UI/UX</li>
                  <li>All levels accepted: junior, medior and senior</li>
                </ul>
                <p>
                  Are you an enthusiastic individual or team, ready for a challenge where your
                  skills are put to the test? Looking for challenge that is driven by some good
                  healthy competition? Or do you simply want to network and collaborate with
                  like-minded individuals?{' '}
                  <a
                    href="https://www.eventbrite.com/e/hackathon-technology-vs-life-tickets-48028507559"
                    target="_blank"
                  >
                    <u>Get your free ticket here!</u>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section backgroundColor="offwhite">
        <div className="ui middle aligned stackable grid container">
          <div className="row">
            <div className="sixteen wide column">
              <h2>Sponsorship Deals</h2>
              <p>
                Interested in becoming one of the following contributers to this anticipated
                hackathon. E-mail your contact details to <strong>contact@offcourse.io</strong> and
                we will get back to you with more information!.
              </p>
              <h3>Golden Perks 2000.-</h3>
              <ul>
                <li>5min kick-off during the event</li>
                <li>Logo on the event materials/ goodies</li>
                <li>Logo on the official website</li>
                <li>
                  Website blog posts on Hacker Noon - 200K followers globally; Offcourse.io;
                  42workspace.com; Honeypot.io
                </li>
                <li>Unlimited social media posts</li>
                <li>Aftermovie</li>
                <li>Recruitment table at the event kick-off</li>
              </ul>
              <h3>Silver Perks 1000.-</h3>
              <ul>
                <li>Logo on the event materials/ goodies</li>
                <li>Logo on the official website</li>
                <li>Website blog posts on Offcourse.io; 42workspace.com; Honeypot.io</li>
                <li>3 social media posts</li>
                <li>Aftermovie</li>
              </ul>
              <h3>Bronze Perks 500.-</h3>
              <ul>
                <li>logo on the event materials/ goodies</li>
                <li>logo on the official website</li>
                <li>2 social media posts</li>
                <li>aftermovie</li>
              </ul>
              <h3>Things/In-Kind Perks</h3>
              <ul>
                <li>Branded products and goodies at the event</li>
                <li>1 social media post</li>
                <li>Aftermovie</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="ui middle aligned grid container">
          <div className="centered row">
            <div className="sixteen wide tablet ten wide computer column">
              <h2>Volunteers</h2>
              <p>
                If you are a professional in any field, would like to gain some experience or are
                already a pro, or would like to learn something new, then volunteer to be a part of
                this event. <strong>We have the following volunteer positions open:</strong>
              </p>
              <h3>Mentors</h3>
              <ul>
                <li>variety of skill sets: management, project/event surveyor etc.</li>
                <li>
                  available through the weekend: Friday 21st September - Sunday 23rd September 2018
                </li>
                <li>
                  featured on the website (professors, c-suite executives, key stakeholders etc.)
                </li>
              </ul>
              <h3>Challenge Leads</h3>
              <ul>
                <li>Available 21 -23 September full-time/ assigned to a team</li>
                <li>Manage the specific challenges and the corresponding teams</li>
                <li>Familiarise themselves with problem statement well</li>
                <li>
                  “Project manager” for the duration of the event- weekend availability is required
                </li>
                <li>Primary communicators between the hackers and the judges</li>
                <li>Pre-event support - expectations, role distribution etc</li>
              </ul>
              <h3>Volunteers</h3>
              <ul>
                <li>Available according to his/ her schedule</li>
                <li>Event logistics- timing and schedule</li>
                <li>Vendor management / Catering</li>
                <li>Checking in with Hackers/Mentors/Challenge Leads on needs</li>
                <li>Primary communicators between participants and guests</li>
              </ul>
              <h3>Volunteer Coordinator</h3>
              <ul>
                <li>Manage volunteers by assigning and confirming shifts</li>
                <li>Orient the volunteers, judges and guests around the venue</li>
                <li>
                  Manage the volunteer contact information and coordinate with event organizers
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section backgroundColor="offwhite">
        <CallToAction action={<ContactForm />} title="Contact us here!" />
      </Section>
    </div>
  );
};

export default Hackathon;
