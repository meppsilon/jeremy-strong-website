import React, { Component } from "react";
import Link, { navigateTo } from "gatsby-link";
import Dotdotdot from "react-dotdotdot";
import Player from "./Player";
import DummyPlayer from "./Player/DummyPlayer";
import RealPlayer from "./Player/RealPlayer";

class Section extends Component {
  render() {
    const { title, posts, slug, limit } = this.props;
    return (
      <div id={title.toLowerCase()} className="bg-black-true">
        <div className="mx-auto sm:w-9/10">
          <div className="font-bold music-title pt-10 sm:text-left text-3xl text-center text-white">
            {title}
          </div>
          <div className="md:flex md:flex-wrap md:-mx-4">
            {posts.edges.slice(0, limit).map(
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
                  <div className="w-full">
                    <DummyPlayer
                      url={post.link}
                      dummyClick={() => navigateTo(slug)}
                    />
                  </div>
                  <div className="w-2/3 pt-3 mx-auto sm:pl-6 sm:pt-0 sm:w-full md:w-full md:pl-0 md:pt-3">
                    <Link
                      to={slug}
                      className="block text-center text-lg font-semibold text-white sm:text-left md:text-center"
                    >
                      {post.title}
                    </Link>
                    <Dotdotdot clamp={3}>
                      <div
                        className="text-center pt-2 text-sm font-medium sm:text-left md:text-center"
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
          {posts.totalCount > limit && (
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
