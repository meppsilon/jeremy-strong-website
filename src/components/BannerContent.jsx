import React from "react";
import Link from "gatsby-link";
import BackgroundMedia from "./BackgroundMedia";

const BannerContent = ({ siteTitle }) => (
  <div className="w-full flex h-screen">
    <BackgroundMedia />
    <div className="self-center absolute w-full flex flex-col text-white">
      <h1 className="text-center">
        <Link
          to="/"
          className="text-white"
          style={{ fontSize: "2.5rem" }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div
        className="text-center mt-3 font-light"
        style={{ fontSize: "32px" }}
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
);

export default BannerContent;
