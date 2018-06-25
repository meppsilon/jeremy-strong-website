import React from 'react';
import PropTypes from 'prop-types';
import PostDetail from '../components/PostDetail';

export const ChoreographyPageTemplate = ({ title, description, posts }) => {
  console.log('choreography page template');
  return (
    <section className="pt-8 m-8 text-white">
      <div className="text-center">
        <h1 className="font-semibold my-6">{title}</h1>
        <h2 className="font-light">{description}</h2>
      </div>
      <div className="md:flex md:flex-wrap md:justify-between">
        {posts.edges.map(({ node: { frontmatter: post } }) => (
          <PostDetail {...post} />
        ))}
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
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "post-detail" }, section: { eq: "choreography" } }}
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
