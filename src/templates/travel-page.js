import React from 'react';
import PropTypes from 'prop-types';

export const TravelPageTemplate = ({ title, description }) => {
  console.log('travel page template');
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <h3>{description}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

TravelPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
};

const TravelPage = ({ data }) => {
  const { post } = data;

  return (
    <TravelPageTemplate
      title={post.frontmatter.title}
      description={post.frontmatter.description}
    />
  );
};

TravelPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TravelPage;

export const travelPageQuery = graphql`
  query TravelPage($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
      }
    }
  }
`;
