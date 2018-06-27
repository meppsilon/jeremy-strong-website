import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import PostDetail from '../components/PostDetail';

export const MusicPageTemplate = ({ title, description, posts }) => {
  return (
    <section className="pt-8 m-8 text-white">
      <div className="text-center">
        <h1 className="font-semibold my-6">{title}</h1>
        <h2 className="font-light">{description}</h2>
      </div>
      <div className="md:flex md:flex-wrap md:justify-between">
        {posts.map(({ node: { fields: { slug }, frontmatter: post } }) => (
          <PostDetail {...post} slug={slug} />
        ))}
      </div>
    </section>
  );
};

MusicPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
};

const MusicPage = ({ data }) => {
  const { musicPage, posts } = data;
  console.log('posts', posts);
  return (
    <MusicPageTemplate
      title={musicPage.frontmatter.title}
      description={musicPage.frontmatter.description}
      posts={get(posts, 'edges', [])}
    />
  );
};

MusicPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MusicPage;

export const musicPageQuery = graphql`
  query MusicPage($id: String!) {
    musicPage: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
      }
    }
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "post-detail" }, section: { eq: "music" } }}
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
