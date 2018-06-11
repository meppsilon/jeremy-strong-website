import React from 'react';
import PropTypes from 'prop-types';

export const MusicPageTemplate = ({ title, description }) => {
  console.log('music page template');
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

MusicPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
};

const MusicPage = ({ data }) => {
  const { post } = data;

  return (
    <MusicPageTemplate
      title={post.frontmatter.title}
      description={post.frontmatter.description}
    />
  );
};

MusicPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MusicPage;

export const musicPageQuery = graphql`
  query MusicPage($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
      }
    }
  }
`;
