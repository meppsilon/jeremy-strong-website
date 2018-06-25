import React from 'react';
import PropTypes from 'prop-types';
import PostDetail from '../components/PostDetail';

export const FitnessPageTemplate = ({ title, description, posts }) => {
  console.log('fitness page template');
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

FitnessPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
};

const FitnessPage = ({ data }) => {
  const { fitnessPage, posts } = data;

  return (
    <FitnessPageTemplate
      title={fitnessPage.frontmatter.title}
      description={fitnessPage.frontmatter.description}
      posts={posts}
    />
  );
};

FitnessPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default FitnessPage;

export const fitnessPageQuery = graphql`
  query FitnessPage($id: String!) {
    fitnessPage: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
      }
    }
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "post-detail" }, section: { eq: "fitness" } }}
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
