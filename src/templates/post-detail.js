import React from "react";
import ReactPlayer from "react-player";
import Link, { navigateTo } from "gatsby-link";
import classnames from "classnames";
import Dotdotdot from "react-dotdotdot";
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
    const { title, link, description, nextPosts, section } = this.props;
    const { showNavbar } = this.state;
    return (
      <section className="pt-10 text-white">
        <div className="mb-8">
          <Player url={link} size={"maxresdefault"} />
          <div className="w-9/10 mx-auto">
            <p className="font-semibold text-lg mt-2 md:text-xl">{title}</p>
            <p
              className="text-sm leading-tight py-1"
              style={{ color: "#e4e4e4" }}
            >
              {description}
            </p>
          </div>
        </div>
        <div className="w-9/10 mx-auto">
          <p
            className="mb-2 text-sm text-capitalize cursor-pointer md:font-medium"
            onClick={() => navigateTo(`/${section}`)}
          >{`More ${section}`}</p>
          <div className="flex flex-col md:flex-row md:-mx-4">
            {nextPosts.map(
              ({
                node: {
                  fields: { slug },
                  frontmatter: post
                }
              }) => (
                <div className="flex mb-4 md:flex-col md:w-1/3 md:px-4">
                  <div className="w-1/3 sm:w-1/2 md:w-full">
                    <DummyPlayer
                      showPlay={false}
                      url={post.link}
                      size={"hqdefault"}
                      dummyClick={() => navigateTo(slug)}
                    />
                  </div>
                  <div
                    className="w-2/3 pl-2 cursor-pointer sm:w-1/2 md:w-full md:pl-0"
                    onClick={() => navigateTo(slug)}
                  >
                    <p className="block text-white text-sm font-medium text-ellipsis pb-1 hover:text-indigo-dark sm:text-base sm:font-semibold md:pt-2 md:text-sm">
                      {post.title}
                    </p>
                    <div
                      className="text-xs font-light leading-tight text-ellipsis sm:text-sm md:hidden"
                      style={{ color: "#e4e4e4" }}
                    >
                      <Dotdotdot clamp={2}>
                        <p>{post.description}</p>
                      </Dotdotdot>
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
  const postIndex = posts.edges.map(edge => edge.node.id).indexOf(id);
  const nextPosts = [
    posts.edges[(postIndex + 1) % posts.totalCount],
    posts.edges[(postIndex + 2) % posts.totalCount],
    posts.edges[(postIndex + 3) % posts.totalCount]
  ];
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
        section
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
