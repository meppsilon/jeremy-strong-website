import React from "react";
import Link from "gatsby-link";

const SmallMenu = ({ sections, hideMenu }) => (
  <div className="font-semibold text-sm">
    {sections.map(({ node: { frontmatter: { title } } }, i) => (
      title !== 'Travel' &&
      <Link
        className="text-white pr-2 block text-center menu-item curor-pointer"
        key={`section-${title.toLowerCase()}-${i}`}
        onClick={hideMenu}
        to={`/${title.toLowerCase()}`}
      >
        {title}
      </Link>
    ))}
  </div>
);

export default SmallMenu;
