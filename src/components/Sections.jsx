import React from 'react';
import MusicSection from './MusicSection';

const Sections = ({ id, musicPosts }) => (
  <div
    id={id}
    // style={{
    //   padding: 16,
    //   width: '100%',
    //   ...style
    // }}
  >
    <MusicSection musicPosts={musicPosts} />
  </div>
)

export default Sections;
