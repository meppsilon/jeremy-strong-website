import React, { Component } from "react";
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

  render() {
    const { title, posts } = this.props;
    return (
      <div id={title.toLowerCase()} className="bg-black-true">
        <div className="mx-auto sm:w-9/10">
          <div className="text-white py-2 text-center music-title text-3xl sm:text-left md:text-center">
            {title}
          </div>
          <div className="md:flex md:flex-wrap md:justify-between">
            {posts.map(({ node: { frontmatter: post } }) => (
              <div className="text-white flex flex-col relative py-4 sm:flex-row md:flex-col md:w-3/10">
                <Player
                  play={this.play}
                  pause={this.pause}
                  changeSong={() => this.changeSong(posts.length)}
                  isPlaying={this.state.playing}
                  stateIndex={this.state.index}
                  songIndex={post.index}
                  url={post.link}
                />
                <div className="w-2/3 pt-3 mx-auto sm:pl-6 sm:pt-0 sm:w-full md:w-full md:pl-0 md:pt-3">
                  <div className="text-center text-lg font-semibold sm:text-left md:text-center">
                    {post.title}
                  </div>
                  <div
                    className="text-center pt-2 text-sm font-medium sm:text-left md:text-center"
                    style={{ color: "#bdbdbd" }}
                  >
                    {post.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Section;
