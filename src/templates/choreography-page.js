import React from 'react';
import PropTypes from 'prop-types';

export const ChoreographyPageTemplate = ({ title, description }) => {
  console.log('choreography page template');
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

ChoreographyPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
};

const ChoreographyPage = ({ data }) => {
  const { post } = data;

  return (
    <ChoreographyPageTemplate
      title={post.frontmatter.title}
      description={post.frontmatter.description}
    />
  );
};

ChoreographyPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ChoreographyPage;

export const choreographyPageQuery = graphql`
  query ChoreographyPage($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
      }
    }
  }
`;
