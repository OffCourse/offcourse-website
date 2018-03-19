import React from 'react';
import Helmet from 'react-helmet';

import CallToAction from '../components/CallToAction';
import Hero from '../components/Hero';
import NewsletterSignUp from '../components/NewsletterSignUp';
import Section from '../components/Section';
import Share from '../components/Share';

const BlogTemplate = (props) => {
  const { data } = props;
  const { markdownRemark } = data;
  const { excerpt, frontmatter, html } = markdownRemark;

  return (
    <div>
      <Helmet
        title={`${frontmatter.title} | Offcourse`}
        meta={[
          { name: 'description', content: 'Offcourse sample description' },
        ]}
      />
      <Hero
        backgroundImage={frontmatter.featuredImage.childImageSharp.resolutions.src}
      >
        <div className="ui grid container">
          <div className="centered row">
            <div className="sixteen wide tablet ten wide computer column">
              <h1>{frontmatter.title}</h1>
              <p>{frontmatter.date}</p>
            </div>
          </div>
        </div>
      </Hero>
      <Section>
        <div className="ui grid container">
          <div className="centered row">
            <div className="sixteen wide tablet ten wide computer column">
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
              <br />
              <hr />
              <Share
                text={excerpt}
                title={frontmatter.title}
                url={frontmatter.path}
              />
            </div>
          </div>
        </div>
      </Section>
      <Section backgroundColor="offwhite">
        <CallToAction
          action={<NewsletterSignUp />}
          title="Sign up for the newsletter to get all of our updates directly in your mailbox"

        />
      </Section>
    </div>
  );
};

export default BlogTemplate;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt(pruneLength: 250)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        featuredImage {
          childImageSharp {
            resolutions(width: 1200, height: 400) {
              ...GatsbyImageSharpResolutions
            }
          }
        }
      }
    }
  }
`;
