import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Sections from '../components/Sections';
import Section from '../components/Section';

// const sections = [
//   {
//     id: 'music',
//     title: 'Music',
//     backgroundColor: 'black',
//     color: 'white',
//   },
//   {
//     id: 'choreography',
//     title: 'Choreography',
//     style: {
//       backgroundColor: 'blue',
//       color: 'white',
//     },
//   },
//   {
//     id: 'fitness',
//     title: 'Fitness',
//     style: {
//       backgroundColor: 'green',
//       color: 'white',
//     },
//   },
//   {
//     id: 'travel',
//     title: 'Travel',
//     style: {
//       backgroundColor: 'red',
//       color: 'white',
//     },
//   },
// ];

export default class IndexPage extends React.Component {
  render() {
    console.log('data', this.props);
    const {
      data: {
        sections: { edges: sections },
      },
    } = this.props;

    const siteTitle = 'Jeremy Strong';

    return (
      <div>
        <div
          className="h-screen flex relative"
          style={{
            backgroundPosition: 'center',
            backgroundImage:
              'url(https://scontent-lax3-1.cdninstagram.com/vp/9db9e2e9ffaa61cacd46506a1cbbd454/5BB06DD3/t51.2885-15/e35/20839075_2013235065369056_4459404031642566656_n.jpg)',
          }}
        >
          <div className="w-full flex">
            <div className="flex justify-end pt-3 font-semibold text-sm w-full">
              {sections.map(({ node: { frontmatter: { title } } }, i) => (
                <Link
                  className="text-white pr-2"
                  key={`section-${title.toLowerCase()}-${i}`}
                  to={`#${title.toLowerCase()}`}
                >
                  {title}
                </Link>
              ))}
            </div>
            <div className="self-center absolute w-full flex flex-col text-white">
              <h1 className="text-center">
                <Link
                  to="/"
                  className="text-white"
                  style={{ fontSize: '2.5rem' }}
                >
                  {siteTitle}
                </Link>
              </h1>
              <div
                className="text-center mt-3 font-light"
                style={{ fontSize: '32px' }}
              >
                KickBack
              </div>
              <div className="text-center pt-2">
                <button className="text-center text-base border-white border rounded text-white text-base py-2 px-3">
                  Listen Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          {sections.map(({ node: { frontmatter: { title } }}) => {
            const sectionPosts = get(this.props.data, `${title.toLowerCase()}Posts.edges`)
            if (sectionPosts) return <Section title={title} posts={sectionPosts} />
          })}
        </div>
      </div>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export const pageQuery = graphql`
  query IndexQuery {
    sections: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___index] },
      filter: { frontmatter: { templateKey: { regex: "/\\w*-page/" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
          }
        }
      }
    }
    musicPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "post-detail" }, section: { eq: "music" } }}
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            link
          }
        }
      }
    }
    choreographyPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "post-detail" }, section: { eq: "choreography" } }}
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            link
          }
        }
      }
    }
    fitnessPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "post-detail" }, section: { eq: "fitness" } }}
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            link
          }
        }
      }
    }
  }
`;
