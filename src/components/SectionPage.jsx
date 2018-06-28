import React, { Component } from "react";
import Link, { navigateTo } from "gatsby-link";
import Dotdotdot from "react-dotdotdot";
import get from "lodash/get";
import youtubeGetId from "../utils/youtubeGetId";
import Player from "./Player";
import DummyPlayer from "./Player/DummyPlayer";
import RealPlayer from "./Player/RealPlayer";

class SectionPage extends Component {
  render() {
    const { title, posts, slug } = this.props;
    console.log("dd", this.props);
    return (
      <div id={title.toLowerCase()}>
        <div className="mx-auto sm:w-9/10">
          <div className="text-white py-6 music-title text-center sm:text-left text-3xl font-semibold">
            {title}
          </div>
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
                  className="text-white flex flex-col relative py-4 sm:flex-row sm:overflow-hidden sm:mb-16 sm:py-8 sm:border sm:border-white"
                  style={{ borderColor: '#ffffff1a' }}
                  key={`section-post-${post.title}`}
                >
                  <div className="absolute h-full w-full bg-black-true" style={{ opacity: .25 }}>
                    <img
                      className="absolute transform-xy-center"
                      style={{ filter: "grayscale(100%)", width: '900px' }}
                      src={youtubeGetId(post.link)}
                    />
                  </div>
                  <div className="w-full sm:pl-8">
                    <DummyPlayer
                      url={post.link}
                      dummyClick={() => navigateTo(slug)}
                    />
                  </div>
                  <div className="w-2/3 pt-3 mx-auto sm:pl-6 sm:pt-0 sm:w-full sm:z-10">
                    <Link
                      to={slug}
                      className="block text-center text-lg font-semibold text-white sm:text-left"
                    >
                      {post.title}
                    </Link>
                    <Dotdotdot clamp={3}>
                      <div
                        className="text-center pt-2 text-sm font-medium sm:text-left"
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

export default SectionPage;
