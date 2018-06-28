import React from 'react';

const BackgroundMedia = ({ mediaType, media }) =>
  mediaType === 'image' ? (
    <img
      className="h-screen w-screen flex absolute cover"
      src={media}
    />
  ) : (
    <video autoplay muted loop className="h-screen w-screen flex absolute cover">
      <source src={media} type="video/mp4" />
    </video>
  );

export default BackgroundMedia;
