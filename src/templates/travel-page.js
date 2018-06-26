import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import PostDetail from '../components/PostDetail';

export const TravelPageTemplate = ({ title, description, posts }) => {
  console.log('travel page template');
  return (
    <section className="pt-8 m-8 text-white">
      <div className="text-center">
        <h1 className="font-semibold my-6">{title}</h1>
        <h2 className="font-light">{description}</h2>
      </div>
      <div className="md:flex md:flex-wrap md:justify-between">
        {posts.map(({ node: { frontmatter: post } }) => (
          <PostDetail {...post} />
        ))}
      </div>
    </section>
  );
};

TravelPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
};

const TravelPage = ({ data }) => {
  const { travelPage, posts } = data;

  return (
    <TravelPageTemplate
      title={travelPage.frontmatter.title}
      description={travelPage.frontmatter.description}
      posts={get(posts, 'edges', [])}
    />
  );
};

TravelPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TravelPage;

export const travelPageQuery = graphql`
  query TravelPage($id: String!) {
    travelPage: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
      }
    }
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "post-detail" }, section: { eq: "travel" } }}
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
