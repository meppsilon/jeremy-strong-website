import React from "react";
import PropTypes from "prop-types";
import Link, { navigateTo } from "gatsby-link";
import Dotdotdot from "react-dotdotdot";
import Player from "../components/Player";
import DummyPlayer from "../components/Player/DummyPlayer";
import RealPlayer from "../components/Player/RealPlayer";
import PostDetail from "../components/PostDetail";

const SectionPage = ({ title, description, posts }) => {
  return (
    <div className="mx-auto sm:w-9/10">
      <div
        className="text-white music-title text-center text-4xl font-semibold self-center py-6"
        to={`/${title.toLowerCase()}`}
      >
        {title}
      </div>
      <div className="md:flex md:flex-wrap md:-mx-4">
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
              className="text-white flex flex-col relative py-4 sm:flex-row md:w-1/2 md:px-4"
              key={`section-post-${post.title}`}
            >
              <div className="w-full">
                <DummyPlayer
                  url={post.link}
                  dummyClick={() => navigateTo(slug)}
                />
              </div>
              <div className="w-2/3 pt-3 mx-auto sm:pl-6 sm:pt-0 sm:w-full md:w-full md:pl-3">
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
    </div>
  );
};

export default SectionPage;
