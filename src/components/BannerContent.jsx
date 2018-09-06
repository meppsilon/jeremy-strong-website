import React from 'react';
import Link, { navigateTo } from 'gatsby-link';
import startsWith from 'lodash/startsWith';

const BannerContent = ({ siteTitle, bannerTitle, bannerSlug, bannerButton }) => (
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
    </div>
  </div>
);

export default BannerContent;
