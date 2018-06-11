import React from 'react';
import Link from 'gatsby-link';

const Header = ({ siteTitle, sections }) => {
  return (
    <div
      className="h-screen flex relative"
      style={{
        backgroundPosition: 'center',
        backgroundImage:
          'url(https://scontent-lax3-1.cdninstagram.com/vp/9db9e2e9ffaa61cacd46506a1cbbd454/5BB06DD3/t51.2885-15/e35/20839075_2013235065369056_4459404031642566656_n.jpg)',
      }}
    >
      <div className="w-full flex">
        <div className="flex justify-end pt-3 font-semibold text-sm w-full">
          {sections.map(section => (
            <Link
              className="text-white pr-2"
              key={section.id}
              to={`#${section.id}`}
            >
              {section.title}
            </Link>
          ))}
        </div>
        <div className="self-center absolute w-full flex flex-col text-white">
          <h1 className="text-center">
            <Link to="/" className="text-white" style={{ fontSize: '2.5rem' }}>
              {siteTitle}
            </Link>
          </h1>
          <div
            className="text-center mt-3 font-light"
            style={{ fontSize: '32px' }}
          >
            KickBack
          </div>
          <div className="text-center pt-2">
            <button className="text-center text-base border-white border rounded text-white text-base py-2 px-3">
              Listen Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
