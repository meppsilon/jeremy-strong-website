import React from 'react';

const Section = ({ id, title, style }) => (
  <div
    id={id}
    style={{
      padding: 16,
      width: '100%',
      ...style
    }}
  >
    <div style={{ maxWidth: '1280px' }}>
      <h1>{title}</h1>
    </div>
    <div>
      {body}
    </div>
  </div>
)

export default Section;
