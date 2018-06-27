import React from "react";
import ReactPlayer from "react-player";
import Link, { navigateTo } from "gatsby-link";
import classnames from "classnames";
import Player from "../components/Player";
import DummyPlayer from "../components/Player/DummyPlayer";
import PostDetail from "../components/PostDetail";

const YouTubeGetID = url => {
  url = url.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  return undefined !== url[2] ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
};

export class PostDetailTemplate extends React.Component {
  state = { showNavbar: true };
  render() {
    const { title, link, description, nextPosts } = this.props;
    const { showNavbar } = this.state;
    return (
      <section className="pt-10 text-white">
        <div className="mb-8">
          <Player url={link} size={"maxresdefault"} />
          <div className="w-9/10 mx-auto">
            <p className="font-semibold text-2xl mt-2">{title}</p>
            <p className="text-lg py-2">{description}</p>
          </div>
        </div>
        <div className="w-9/10 mx-auto">
          <h2 className="font-light">Next Posts</h2>
          <div className="flex flex-col">
            {nextPosts.map(
              ({
                node: {
                  fields: { slug },
                  frontmatter: post
                }
              }) => (
                <div className="flex">
                  <div className="w-1/2">
                    <DummyPlayer
                      showPlay={false}
                      url={post.link}
                      dummyClick={() => navigateTo(slug)}
                    />
                  </div>
                  <div className="">
                    <Link
                      to={slug}
                      className="block text-white hover:text-indigo-dark text-center text-lg font-semibold sm:text-left md:text-center"
                    >
                      {post.title}
                    </Link>
                    <div
                      className="text-center pt-2 text-sm font-medium sm:text-left md:text-center"
                      style={{ color: "#bdbdbd" }}
                    >
                      {post.description}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    );
  }
}

const PostDetailPage = props => {
  const {
    data: {
      post: { id, frontmatter },
      posts
    }
  } = props;
  console.log("props", posts);
  const postIndex = posts.edges.map(edge => edge.node.id).indexOf(id);
  console.log("post index", postIndex);
  const nextPosts = [
    posts.edges[(postIndex + 1) % posts.totalCount],
    posts.edges[(postIndex + 2) % posts.totalCount],
    posts.edges[(postIndex + 3) % posts.totalCount]
  ];
  console.log("next posts", nextPosts);
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
