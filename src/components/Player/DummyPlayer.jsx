import React from "react";

const YouTubeGetID = url => {
  url = url.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  return undefined !== url[2] ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
};

const DummyPlayer = ({ url, hide, dummyClick }) => (
  <div
    className="w-full h-0 relative aspect-ratio-16/9 overflow-hidden"
    // onClick={() => hide()}
    onClick={dummyClick}
  >
    <img
      className="pin-t pin-l absolute"
      style={{ top: "-16.82%" }}
      src={`http://img.youtube.com/vi/${YouTubeGetID(url)}/hqdefault.jpg`}
    />
    <i
      className="fa fa-play fa-2x absolute text-white transform-xy-center"
      style={{ border: '1px solid #ffffffbf', padding: '4px 12px 4px 16px', color: '#ffffffbf' }}
      aria-hidden="true"
    />
  </div>
);

export default DummyPlayer;
