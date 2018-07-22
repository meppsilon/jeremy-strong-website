import React from 'react';
import PropTypes from 'prop-types';
import SectionPage from '../components/SectionPage';

export const ChoreographyPageTemplate = ({ title, description, posts }) => {
  console.log('choreography page template');
  return (
    <section
      className="pt-8 text-white h-full min-h-screen"
      style={{ background: 'linear-gradient(rgb(128, 0, 0), rgb(94, 25, 20))' }}
    >
      <div id={title.toLowerCase()}>
        <SectionPage title={title} description={description} posts={posts} />
      </div>
    </section>
  );
};

ChoreographyPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
};

const ChoreographyPage = ({ data }) => {
  const { choreographyPage, posts } = data;

  return (
    <ChoreographyPageTemplate
      title={choreographyPage.frontmatter.title}
      description={choreographyPage.frontmatter.description}
      posts={posts}
    />
  );
};

ChoreographyPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ChoreographyPage;

export const choreographyPageQuery = graphql`
  query ChoreographyPage($id: String!) {
    choreographyPage: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
      }
    }
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          templateKey: { eq: "post-detail" }
          section: { eq: "choreography" }
        }
      }
    ) {
      totalCount
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
