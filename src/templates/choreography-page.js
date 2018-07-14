import React from 'react';
import PropTypes from 'prop-types';
import SectionPage from '../components/SectionPage';

export const ChoreographyPageTemplate = ({ title, description, posts }) => {
  return (
    <section
      className="pt-8 text-white h-full min-h-screen"
      style={{ background: 'linear-gradient(rgb(21, 38, 70), rgb(0, 47, 58))' }}
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
