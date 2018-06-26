import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Navbar from '../components/Navbar';
import './generated.css';

const TemplateWrapper = ({
  children,
  data: {
    sections: { edges: sections },
    socialLinks: { edges: socialLinks },
  },
}) => (
  <div>
    <link
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <Helmet title="Jeremy Strong" />
    <Navbar sections={sections} socialLinks={socialLinks} />
    <div
      style={{
        margin: '0 auto',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;

export const pageQuery = graphql`
  query IndexLayoutQuery {
    socialLinks: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___index] },
      filter: { frontmatter: { contentKey: { eq: "social-links" } } }
    ) {
      edges {
        node {
          frontmatter {
            link
            icon
          }
        }
      }
    }
    sections: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___index] },
      filter: { frontmatter: { templateKey: { regex: "/\\w*-page/" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
