import React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";
import MusicSectionPage from "../components/MusicSectionPage";
import SectionPage from "../components/SectionPage";

export const MusicPageTemplate = ({ title, description, posts }) => {
  return (
    <section
      className="pt-8 text-white h-full min-h-screen"
      style={{
        background: "linear-gradient(rgb(103, 73, 47), rgb(41, 41, 41))"
      }}
    >
      <div id={title.toLowerCase()}>
        <SectionPage
          title={title}
          description={description}
          posts={posts}
        />
      </div>
    </section>
  );
};

MusicPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string
};

const MusicPage = ({ data }) => {
  const { musicPage, posts } = data;
  return (
    <MusicPageTemplate
      title={musicPage.frontmatter.title}
      description={musicPage.frontmatter.description}
      posts={posts}
    />
  );
};

MusicPage.propTypes = {
  data: PropTypes.object.isRequired
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
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          templateKey: { eq: "post-detail" }
          section: { eq: "music" }
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
