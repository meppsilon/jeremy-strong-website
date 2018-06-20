import React from 'react';
import ReactPlayer from 'react-player';
import Link from 'gatsby-link';

const Section = ({ title, slug, posts }) => (
  <div id={title.toLowerCase()} className="bg-black-true">
    <div className="mx-auto sm:w-9/10">
      <div className="text-white py-2 text-center music-title text-3xl sm:text-left md:text-center">
        {title}
      </div>
      <div className="md:flex md:flex-wrap md:justify-between">
        {posts.edges.map(({ node: { frontmatter: post } }) => (
          <div className="text-white flex flex-col relative py-4 sm:flex-row md:flex-col md:w-3/10">
            <div className="flex justify-center relative sm:w-full">
              <div className="w-full h-full relative aspect-ratio-16/9">
                <ReactPlayer
                  url={post.link}
                  className="pin-t pin-l absolute"
                  width="100%"
                  height="100%"
                  controls
                  config={{
                    youtube: {
                      playerVars: { modestbranding: 0 },
                    },
                    soundcloud: {
                      options: {
                        show_artwork: true,
                        show_playcount: false,
                        show_user: false,
                        sharing: false,
                      },
                    },
                  }}
                />
              </div>
            </div>
            <div className="w-2/3 pt-3 mx-auto sm:pl-6 sm:pt-0 sm:w-full md:w-full md:pl-0 md:pt-3">
              <div className="text-center text-lg font-semibold sm:text-left md:text-center">
                {post.title}
              </div>
              <div
                className="text-center pt-2 text-sm font-medium sm:text-left md:text-center"
                style={{ color: '#bdbdbd' }}
              >
                {post.description}
              </div>
            </div>
          </div>
        ))}
      </div>
      {posts.totalCount > 3 && <Link to={slug} className="flex items-center justify-center py-6">See more {title}</Link>}
    </div>
  </div>
);

export default Section;
