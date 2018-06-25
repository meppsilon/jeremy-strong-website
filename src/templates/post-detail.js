import React from 'react';
import ReactPlayer from 'react-player';

export const PostDetailTemplate = ({ title, link, description }) => (
  <section className="pt-8 m-8 text-white">
    <div className="text-center">
      <div className="w-full h-full relative aspect-ratio-16/9">
        <ReactPlayer
          url={link}
          className="pin-t pin-l absolute"
          width="100%"
          height="100%"
          controls
          config={{
            youtube: {
              playerVars: { modestbranding: 0 },
            },
            soundcloud: {
              options: {
                show_artwork: true,
                show_playcount: false,
                show_user: false,
                sharing: false,
              },
            },
          }}
        />
      </div>
      <h1 className="font-semibold my-6">{title}</h1>
      <h2 className="font-light">{description}</h2>
    </div>
  </section>
);

const PostDetail = ({
  data: {
    post: { frontmatter },
  },
}) => <PostDetailTemplate {...frontmatter} />;

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
