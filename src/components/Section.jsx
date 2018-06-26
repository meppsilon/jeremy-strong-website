import React, { Component } from "react";
import Link, { navigateTo } from "gatsby-link";
import Player from "./Player";

class Section extends Component {
  state = { playing: false, index: null };

  changeSong = length => {
    if (this.state.index + 1 < length) {
      this.setState({ playing: true, index: this.state.index + 1 });
    } else {
      this.setState({ playing: false });
    }
  };

  play = index => {
    this.setState({ playing: true, index });
  };

  pause = index => {
    if (this.state.playing && this.state.index === index) {
      this.setState({ playing: false });
    }
  };
  // node: { fields: { slug }
  render() {
    const { title, posts, slug } = this.props;
    return (
      <div id={title.toLowerCase()} className="bg-black-true">
        <div className="mx-auto sm:w-9/10">
          <div className="text-white py-2 text-center music-title text-3xl sm:text-left md:text-center">
            {title}
          </div>
          <div className="md:flex md:flex-wrap -mx-4">
            {posts.edges.map(
              (
                {
                  node: {
                    frontmatter: post,
                    fields: { slug: slug }
                  }
                },
                i
              ) => (
                <div
                  className="text-white flex flex-col relative py-4 sm:flex-row md:flex-col md:w-1/3 md:px-4"
                  key={`section-post-${post.title}`}
                >
                  <Player
                    play={this.play}
                    pause={this.pause}
                    changeSong={() => this.changeSong(posts.length)}
                    isPlaying={this.state.playing}
                    stateIndex={this.state.index}
                    songIndex={i}
                    url={post.link}
                    dummyClick={() => navigateTo(slug)}
                  />
                  <div className="w-2/3 pt-3 mx-auto sm:pl-6 sm:pt-0 sm:w-full md:w-full md:pl-0 md:pt-3">
                    <Link
                      to={slug}
                      className="block text-center text-lg font-semibold text-white sm:text-left md:text-center"
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
          {posts.totalCount > 3 && (
            <Link to={slug} className="flex items-center justify-center py-6">
              See more {title}
            </Link>
          )}
        </div>
      </div>
    );
  }
}

export default Section;
