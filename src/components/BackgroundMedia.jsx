import React from 'react';

const BackgroundMedia = ({ media }) => (
  <img
    className="h-screen w-screen flex absolute cover"
    src={media}
  />
);

export default BackgroundMedia;
