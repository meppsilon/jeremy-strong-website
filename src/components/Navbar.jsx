import React from "react";
import Link from "gatsby-link";

const Navbar = ({ sections }) => (
  <div className="flex justify-end pt-3 font-semibold text-sm w-full relative">
    {sections.map(({ node: { frontmatter: { title } } }, i) => (
      <Link
        className="text-white pr-2"
        key={`section-${title.toLowerCase()}-${i}`}
        to={`#${title.toLowerCase()}`}
      >
        {title}
      </Link>
    ))}
  </div>
);

export default Navbar;
