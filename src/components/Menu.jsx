import React from "react";
import Link from "gatsby-link";

const Menu = ({ sections, hideMenu }) => (
  <div className="font-semibold text-sm">
    {sections.map(({ node: { frontmatter: { title } } }, i) => (
      <Link
        className="text-white pr-2 block text-center"
        key={`section-${title.toLowerCase()}-${i}`}
        onClick={hideMenu}
        to={`#${title.toLowerCase()}`}
      >
        {title}
      </Link>
    ))}
  </div>
);

export default Menu;
