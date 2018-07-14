import React from "react";
import PropTypes from "prop-types";
import SectionPage from "../components/SectionPage";

export const FitnessPageTemplate = ({ title, description, posts }) => {
  return (
    <section className="pt-8 text-white">
      <div id={title.toLowerCase()}>
        {/* <SectionPage
          title={title}
          description={description}
          posts={posts}
        /> */}
      </div>
    </section>
  );
};

FitnessPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string
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
  data: PropTypes.object.isRequired
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
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          templateKey: { eq: "post-detail" }
          section: { eq: "fitness" }
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
