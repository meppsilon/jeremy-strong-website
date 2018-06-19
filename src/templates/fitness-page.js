import React from 'react';
import PropTypes from 'prop-types';

export const FitnessPageTemplate = ({ title, description }) => {
  console.log('fitness page template');
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

FitnessPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
};

const FitnessPage = ({ data }) => {
  const { post } = data;

  return (
    <FitnessPageTemplate
      title={post.frontmatter.title}
      description={post.frontmatter.description}
    />
  );
};

FitnessPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default FitnessPage;

export const fitnessPageQuery = graphql`
  query FitnessPage($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
      }
    }
  }
`;
