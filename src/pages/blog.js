import React from 'react';
import { Button } from 'offcourse-ui-components';
import Helmet from 'react-helmet';

import CallToAction from '../components/CallToAction';
import NewsletterSignUp from '../components/NewsletterSignUp';
import PageHeader from '../components/PageHeader';
import PostCard from '../components/PostCard';
import Section from '../components/Section';


const Blog = (props) => {
  const { data } = props;
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div>
      <Helmet
        title="Blog | Offcourse"
        meta={[
          { name: 'description', content: 'Offcourse is an open source platform for crowdsourced learning and knowledge sharing.' },
        ]}
      />
      <PageHeader
        title="Blog"
        subtitle="Updates from and about the platform and our mission"
      />
      <Section
        backgroundColor="offwhite"
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
          title="Sign up for the newsletter to get all of our updates directly in your mailbox"

        />
      </Section>
    </div>
  );
};

export default Blog;

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
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
