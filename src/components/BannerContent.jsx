import React from 'react';
import Link, { navigateTo } from 'gatsby-link';
import startsWith from 'lodash/startsWith';

const BannerContent = ({ siteTitle, bannerTitle, bannerSlug, bannerButton, musicLinks }) => (
  <div className="w-screen flex h-screen">
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
        {bannerTitle}
      </div>
      <div className="text-center pt-2">
        <button
          className="text-center text-base border-white border-2 text-white text-base py-2 px-5"
          onClick={() => { startsWith(bannerSlug, '/') ? navigateTo(bannerSlug) : window.location = bannerSlug; }}
        >
          {bannerButton}
        </button>
      </div>
      {musicLinks && (
        <div id="musicLinks" className="text-center">
          {musicLinks.map(musicLink => (
            <a href={musicLink.link}>
              <i
                className={`fa text-white pt-2 pr-2 fa-${musicLink.type.toLowerCase()}`}
                style={{ fontSize: '1.25rem' }}
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default BannerContent;
