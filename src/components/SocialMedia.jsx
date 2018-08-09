import React from 'react';

const SocialMedia = ({ socialLinks }) => (
  <div className="flex z-10 ml-auto pr-2">
    {socialLinks.map(({ node: { frontmatter: { link, icon } } }) => (
      <a href={link} className="links-social" target="_blank">
        <i className={`fa fa-${icon} text-white`} aria-hidden="true" />
      </a>
    ))}
  </div>
);

export default SocialMedia;
