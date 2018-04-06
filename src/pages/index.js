import React, { Component } from 'react';
import { Button, CourseCard, CourseProvider, SignInForm, SignUpForm } from 'offcourse-ui-components';
import Helmet from 'react-helmet';
import { navigateTo } from 'gatsby-link';

import CallToAction from '../components/CallToAction';
import Carousel from '../components/Carousel';
import Hero from '../components/Hero';
import Quote from '../components/Quote';
import PostCard from '../components/PostCard';
import Section from '../components/Section';

import mountainImg from '../assets/img/mountain.jpg';

class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMenuItem: 'signUp',
    };
  }

  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const { activeMenuItem } = this.state;

    const courseGoals = [
      'Write Serverless Functions With Aws Lambda',
      'Learn More About Graphql',
      'Develop A Serverless App In Firebase',
      'Transition From Rest To Graphql Api',
    ];

    return (
      <div>
        <Helmet
          title="Offcourse"
          meta={[
            { name: 'description', content: 'Offcourse is an open source platform for crowdsourced learning and knowledge sharing.' },
          ]}
        />
        <Hero
          backgroundColor="primary"
          backgroundImage={mountainImg}
        >
          <div className="ui grid container">
            <div className="middle aligned row">
              <div className="sixteen wide mobile eight wide tablet eight wide computer left floated column">
                <h1>Share what you know. <br className="show-for-computer" />Show who you are.</h1>
                <p>Offcourse is an open source platform for crowdsourced learning and knowledge sharing. We call it <strong>crowdlearning</strong> for short. Anything you find on the web can become part of your personal learning course: blogs, video tutorials, podcasts, you name it. Create collections of learning resources, store them in one place, and share them with like-minded people around the globe.</p>
                <Button positive onClick={() => { navigateTo('/sign-in'); }}>GO TO PLATFORM</Button>
              </div>

              {/* <div className="sixteen wide mobile eight wide tablet six wide computer right floated column">
                <Menu pointing secondary>
                  <Menu.Item
                    name="Sign Up"
                    active={activeMenuItem === 'signUp'}
                    onClick={() => { this.setState({ activeMenuItem: 'signUp' }); }}
                  />

                  <Menu.Item
                    name="Sign In"
                    active={activeMenuItem === 'signIn'}
                    onClick={() => { this.setState({ activeMenuItem: 'signIn' }); }}
                  />

                </Menu>

                <Segment>
                  {activeMenuItem === 'signUp' && <SignUpForm />}
                  {activeMenuItem === 'signIn' && <SignInForm />}
                </Segment>

              </div>*/}
            </div>
          </div>
        </Hero>
        <Section
          backgroundColor="offwhite"
          title="Most viewed courses"
          subtitle="The most viewd courses on the platform this month"
        >
          <div className="ui stackable grid container">
            <div className="row">
              {courseGoals.map((goal) => {
                return (
                  <div
                    key={goal}
                    className="sixteen wide mobile eight wide tablet four wide computer column"
                    style={{
                      // Make font sizes in CourseCard smaller to match app's sizes
                      fontSize: '0.7em',
                    }}
                  >
                    <CourseProvider courseQuery={{ curator: 'offcourse', goal }}>
                      {(course) => {
                        return (
                          <CourseCard centered course={course} hiddenFields={{}} />
                        );
                      }}
                    </CourseProvider>
                  </div>
                );
              })}

            </div>
          </div>
        </Section>
        <Section backgroundColor="white">
          <Carousel
            items={[
              {
                id: 'slide-1',
                icon: 'fab fa-searchengin',
                title: '1. Pick',
                text: 'Pick links to the best online resources. Make use of knowledge that is already out there as opposed to starting from scratch.',
              },
              {
                id: 'slide-2',
                icon: 'fas fa-wrench',
                title: '2. Tweak',
                text: 'Tweak course material to make it suit your style.',
              },
              {
                id: 'slide-3',
                icon: 'fas fa-bullhorn',
                title: '3. Push',
                text: 'Push your course content to the platform and externally. Share knowledge with the crowd.',
              },
            ]}
            render={(item) => {
              return (
                <div key={item.id}>
                  <Quote text={item.title} />
                  <p>{item.text}</p>
                </div>
              )
            }}
          />
        </Section>
        <Section
          backgroundColor="offwhite"
          title="Blog"
          subtitle="Updates from and about the platform"
        >
          <div className="ui stackable grid container">
            <div className="two column row">
              {posts.map(({ node: post }) => {
                const { excerpt, frontmatter } = post;
                const { featuredImage, path, title } = frontmatter;

                return (
                  <div className="column">
                    <PostCard
                      excerpt={excerpt}
                      featuredImage={featuredImage}
                      path={path}
                      title={title}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </Section>
        <Section>
          <CallToAction
            action={<Button positive onClick={() => { navigateTo('/sign-up'); }}>JOIN NOW</Button>}
            title="Join offcourse"
          />
        </Section>
      </div>
    );
  }
}

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      limit: 2,
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 800) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`;
