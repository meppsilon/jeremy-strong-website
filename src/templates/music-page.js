import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import SectionPage from "../components/SectionPage";
import PostDetail from '../components/PostDetail';

export const MusicPageTemplate = (props) => {
  return (
    <section className="text-white h-full">
      <SectionPage {...props} />
    </section>
  );
};

MusicPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
};

const MusicPage = ({ data }) => {
  const { musicPage, posts } = data;
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
