import React from 'react';
import ReactPlayer from 'react-player';

const PostDetail = ({ index, link, title, description }) => (
  <div className="text-white flex flex-col relative py-4 sm:flex-row md:flex-col md:w-3/10">
    <div className="w-full h-full relative aspect-ratio-16/9">
      <ReactPlayer
        url={link}
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
    <div className="w-2/3 pt-3 mx-auto sm:pl-6 sm:pt-0 sm:w-full md:w-full md:pl-0 md:pt-3">
      <div className="text-center text-lg font-semibold sm:text-left md:text-center">
        {title}
      </div>
      <div
        className="text-center pt-2 text-sm font-medium sm:text-left md:text-center"
        style={{ color: '#bdbdbd' }}
      >
        {description}
      </div>
    </div>
  </div>
);

export default PostDetail;
