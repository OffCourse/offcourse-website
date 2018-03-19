import React, { Component } from 'react';
import { CourseCard, CourseProvider, SignInForm, SignUpForm } from 'offcourse-ui-components';
import { Grid, Menu, Segment } from 'semantic-ui-react';
import Helmet from 'react-helmet';

import CallToAction from '../components/CallToAction';
import Carousel from '../components/Carousel';
import Hero from '../components/Hero';
import Quote from '../components/Quote';
import PostCard from '../components/PostCard';
import NewsletterSignUp from '../components/NewsletterSignUp';
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
          title="Join | Offcourse"
          meta={[
            { name: 'description', content: 'Offcourse sample description' },
          ]}
        />
        <Hero
          backgroundImage={mountainImg}
        >
          <div className="ui grid container">
            <div className="middle aligned row">
              <div className="sixteen wide mobile eight wide tablet eight wide computer left floated column">
                <h1>Share what you know. <br className="show-for-computer" />Show who you are.</h1>
                <p>Offcourse is an open source platform for crowdsourced learning. From blogs to podcasts, you can create hand-curated collections to the web's best learning resources, save them in one place, and share them with millions of people around the globe.</p>
              </div>
              <div className="sixteen wide mobile eight wide tablet six wide computer right floated column">
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
              </div>
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
                text: 'Creating a collection on Offcourse is simple. Instead of spending hours making content yourself, you pick the best online resources on a topic you love. Write a task for each link you collect, and put everything together on a card. Add a title and a short description, and there you are – you made a collection that you can share.',
              },
              {
                id: 'slide-2',
                icon: 'fas fa-wrench',
                title: '2. Tweak',
                text: 'You want to learn from the best. That’s why on Offcourse.io, you can tweak collections that were made by others. Copy a collection that’s made by someone you admire, and edit the tasks or resources to make the collection suit your learning style and goals. And voilà – you’re contributing to building a network of the best learning resources on the web.',
              },
              {
                id: 'slide-3',
                icon: 'fas fa-bullhorn',
                title: '3. Push',
                text: 'Once you’re ready, share your collections on your social media channels with the push of a button. Or include the unique links to your collections in your blog or your website. There are so many channels on the web already – we give you the tools to use your own channels to build a name for yourself on the topics that you choose.',
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
            action={<NewsletterSignUp />}
            title="Join offcourse and we promise this and that"

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
