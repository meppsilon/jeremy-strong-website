import React, { Component } from "react";
import Link, { navigateTo } from "gatsby-link";
import Dotdotdot from "react-dotdotdot";
import Player from "./Player";
import DummyPlayer from "./Player/DummyPlayer";
import ImagePost from "./ImagePost";
import Masonry from "react-masonry-component";

class Post extends Component {
  state = { modalIsOpen: false };
  render() {
    const { post, slug } = this.props;
    return (
      <div
        className="text-white flex flex-col relative py-4 sm:flex-row md:flex-col md:w-1/3 md:px-4"
        key={`section-post-${post.title}`}
      >
        <div className="w-full">
          {post.image ? (
            <ImagePost
              image={post.image}
              onOpen={() => this.setState({ modalIsOpen: true })}
              onClose={() => this.setState({ modalIsOpen: false })}
              modalIsOpen={this.state.modalIsOpen}
            />
          ) : (
            <DummyPlayer url={post.link} dummyClick={() => navigateTo(slug)} />
          )}
        </div>
        <div className="w-2/3 pt-3 mx-auto sm:pl-6 sm:pt-0 sm:w-full md:w-full md:pl-0 md:pt-3">
          <div
            to={slug}
            className="cursor-pointer block text-center text-lg font-semibold text-white sm:text-left md:text-center md:truncate"
            onClick={() => post.image ? this.setState({ modalIsOpen: true }) : navigateTo(slug)}
          >
            {post.title}
          </div>
          <div className="md:desc-height">
            <Dotdotdot clamp={post.musicLinks ? 1 : 3}>
              <div
                className="text-center pt-2 text-sm font-medium sm:text-left md:text-center"
                style={{ color: "#bdbdbd" }}
              >
                {post.description}
              </div>
            </Dotdotdot>
            {post.musicLinks && (
              <div id="musicLinks" className="text-center">
                {post.musicLinks.map(musicLink => (
                  <a href={musicLink.link}>
                    <i
                      className={`fa text-white pt-2 pr-2 fa-${musicLink.type.toLowerCase()}`}
                      style={{ fontSize: '1.25rem' }}
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
