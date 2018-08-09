import React from 'react';
import Link from 'gatsby-link';

const LargeMenu = ({ sections }) => (
  <div className="font-semibold text-sm">
    {sections
      .filter(section => section.node.frontmatter.title !== 'Travel')
      .map(({ node: { frontmatter: { title } } }, i) => (
        <Link
          className="text-white pr-2"
          key={`section-${title.toLowerCase()}-${i}`}
          to={`/${title.toLowerCase()}`}
        >
          {title}
        </Link>
      ))}
  </div>
);

export default LargeMenu;
