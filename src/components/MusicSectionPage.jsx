import React, { Component } from "react";
import Link, { navigateTo } from "gatsby-link";
import Dotdotdot from "react-dotdotdot";
import get from "lodash/get";
import youtubeGetId from "../utils/youtubeGetId";
import Player from "./Player";
import DummyPlayer from "./Player/DummyPlayer";
import RealPlayer from "./Player/RealPlayer";

// https://scontent-lax3-2.cdninstagram.com/vp/39def82b051f9c2caf53bdc4a3d16b74/5BE428E0/t51.2885-15/e35/18444977_471729216500915_6506392802195144704_n.jpg
// https://scontent-lax3-2.cdninstagram.com/vp/e3d3f304af1a0e3cf1a07aab34c329b4/5BC5ECE0/t51.2885-15/e35/18512332_1204761469633868_8667651170522628096_n.jpg

class MusicSectionPage extends Component {
  render() {
    const { title, posts } = this.props;
    return (
      <div className="relative">
        <div className="absolute z-10 w-full flex" style={{ height: "40vh" }}>
          <div
            className="text-white absolute music-title text-center text-4xl font-bold music bg-black-true w-full"
            style={{
              border: "3px solid #ffffff",
              borderLeft: "none",
              borderRight: "none",
              fontFamily: "Lato",
              top: "30%"
            }}
          >
            {title}
          </div>
        </div>
        <div
          className="relative"
          style={{ opacity: 0.8, height: "40vh", overflow: "hidden" }}
        >
          <img
            className="absolute h-full w-full cover"
            style={{ filter: "contrast(130%) saturate(120%)" }}
            src={
              "https://scontent-lax3-2.cdninstagram.com/vp/e3d3f304af1a0e3cf1a07aab34c329b4/5BC5ECE0/t51.2885-15/e35/18512332_1204761469633868_8667651170522628096_n.jpg"
            }
          />
        </div>
        <div className="mx-auto sm:w-9/10 z-10 relative">
          <div className="">
            {posts.map(
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
                  className="text-white flex flex-col relative py-4 overflow-hidden sm:flex-row sm:overflow-hidden sm:mb-16 sm:py-8 sm:border sm:border-white"
                  style={{ borderColor: "#ffffff1a" }}
                  key={`section-post-${post.title}`}
                >
                  <div
                    className="absolute h-full w-full bg-black-true"
                    style={{ opacity: 0.1 }}
                  >
                    <img
                      className="absolute transform-xy-center"
                      style={{ filter: "grayscale(100%)", height: "200%" }}
                      src={youtubeGetId(post.link)}
                    />
                  </div>
                  <div className="w-full mx-auto pt-6 sm:pl-8">
                    <DummyPlayer
                      url={post.link}
                      dummyClick={() => navigateTo(slug)}
                      playButtonStyle={{
                        border: "2px solid white",
                        color: "white",
                        backgroundColor: "#367d63"
                      }}
                    />
                  </div>
                  <div className="w-2/3 pt-3 mx-auto sm:pl-6 sm:pt-0 sm:w-full sm:z-10">
                    <Link
                      to={slug}
                      className="section-page-title block text-center text-lg font-semibold text-white sm:text-xl"
                    >
                      {post.title}
                    </Link>
                    <Dotdotdot clamp={3}>
                      <div
                        className="text-center pt-2 text-sm font-medium"
                        style={{ color: "#bdbdbd" }}
                      >
                        {post.description}
                      </div>
                    </Dotdotdot>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MusicSectionPage;
