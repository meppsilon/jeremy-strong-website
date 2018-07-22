import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import SectionPage from "../components/SectionPage";

export const TravelPageTemplate = ({ title, description, posts }) => {
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
