import React from 'react';
import ReactPlayer from 'react-player';
import Link from 'gatsby-link';
import PostDetail from '../components/PostDetail';

const YouTubeGetID = url => {
  url = url.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  return undefined !== url[2] ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
};

export const PostDetailTemplate = ({ title, link, description, nextPosts }) => (
  <section className="pt-8 m-8 text-white">
    <div className="text-center mb-8">
      <h1 className="font-semibold my-6">{title}</h1>
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
      <h2 className="font-light">{description}</h2>
    </div>
    <div>
      <h2 className="font-light">Next Posts</h2>
      <div className="md:flex md:flex-wrap md:justify-between">
        {nextPosts.map(({ node: { fields: { slug }, frontmatter: post } }) => (
          <div className="text-white flex flex-col relative py-4 sm:flex-row md:flex-col md:w-3/10">
            <div className="w-full h-full relative aspect-ratio-16/9">
              <div className="w-full h-0 relative aspect-ratio-16/9 overflow-hidden">
                <img
                  className="pin-t pin-l absolute"
                  style={{ top: "-16.82%" }}
                  src={`http://img.youtube.com/vi/${YouTubeGetID(post.link)}/hqdefault.jpg`}
                />
              </div>
            </div>
            <div className="w-2/3 pt-3 mx-auto sm:pl-6 sm:pt-0 sm:w-full md:w-full md:pl-0 md:pt-3">
              <Link
                to={slug}
                className="block text-white hover:text-indigo-dark text-center text-lg font-semibold sm:text-left md:text-center"
              >
                {post.title}
              </Link>
              <div
                className="text-center pt-2 text-sm font-medium sm:text-left md:text-center"
                style={{ color: '#bdbdbd' }}
              >
                {post.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const PostDetailPage = props => {
  const {
    data: {
      post: { id, frontmatter },
      posts,
    },
  } = props;
  console.log('props', posts);
  const postIndex = posts.edges.map(edge => edge.node.id).indexOf(id);
  console.log('post index', postIndex);
  const nextPosts = [
    posts.edges[(postIndex + 1) % posts.totalCount],
    posts.edges[(postIndex + 2) % posts.totalCount],
    posts.edges[(postIndex + 3) % posts.totalCount],
  ];
  console.log('next posts', nextPosts);
  return <PostDetailTemplate {...frontmatter} nextPosts={nextPosts} />;
};

export default PostDetailPage;

export const postDetailQuery = graphql`
  query PostDetail($id: String!, $section: String) {
    post: markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        description
        link
      }
    }
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          templateKey: { eq: "post-detail" }
          section: { eq: $section }
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
