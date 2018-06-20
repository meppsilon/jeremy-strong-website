import React from 'react';

export const PostDetailTemplate = ({ title, image, description }) => (
  <section className="section">
    <div className="container content">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
            {title}
          </h1>
          <p>{description}</p>
          <img alt={description} src={image} />
        </div>
      </div>
    </div>
  </section>
);

const PostDetail = ({ data: { post } }) => (
  <PostDetailTemplate
    title={post.frontmatter.title}
    description={post.frontmatter.description}
    image={post.frontmatter.image}
  />
);

export default PostDetail;

export const postDetailQuery = graphql`
  query PostDetail($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        link
      }
    }
  }
`;
