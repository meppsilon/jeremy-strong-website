import React from "react";
import ReactPlayer from "react-player";
import Link, { navigateTo } from "gatsby-link";
import classnames from "classnames";
import Dotdotdot from "react-dotdotdot";
import Player from "../components/Player";
import DummyPlayer from "../components/Player/DummyPlayer";
import PostDetail from "../components/PostDetail";

export class PostDetailTemplate extends React.Component {
  state = { showNavbar: true };
  render() {
    const { title, link, description, nextPosts, section, musicLinks } = this.props;
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
            {musicLinks && (
              <div id="musicLinks">
                {musicLinks.map(musicLink => (
                  <a href={musicLink.link}>
                    <i
                      className={`fa text-white pt-2 pr-2 fa-${musicLink.type.toLowerCase()}`}
                      style={{ fontSize: '1.5rem' }}
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="w-9/10 mx-auto">
          <p
            className="mb-2 text-sm text-capitalize cursor-pointer md:font-medium"
            onClick={() => navigateTo(`/${section}`)}
          >{`Up Next`}</p>
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
  let nextPosts = [
    posts.edges[(postIndex + 1) % posts.totalCount],
    posts.edges[(postIndex + 2) % posts.totalCount],
    posts.edges[(postIndex + 3) % posts.totalCount]
  ];
  if (posts.totalCount <= 3) nextPosts = posts.edges.filter(edge => edge.node.id !== id);
  console.log('frontmatter', frontmatter);
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
        musicLinks {
          type
          link
        }
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
