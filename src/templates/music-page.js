import React from 'react';

const MusicPage = ({ title, description }) => (
  <section>
    <h1>{title}</h1>
    <h2>{description}</h2>
  </section>
);

export default MusicPage

export const musicPageQuery = graphql`
  query MusicPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
