import React from 'react';
import MusicSection from './MusicSection';

const Sections = ({ id, title, style }) => (
  <div
    id={id}
    // style={{
    //   padding: 16,
    //   width: '100%',
    //   ...style
    // }}
  >
    <MusicSection />
  </div>
)

export default Sections;
