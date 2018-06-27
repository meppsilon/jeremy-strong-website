import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { BeatLoader } from "react-spinners";

const propTypes = {
  url: PropTypes.string.isRequired,
  dummyClick: PropTypes.func,
  showPlay: PropTypes.bool,
  showLoad: PropTypes.bool,
  className: PropTypes.string,
  imgClassName: PropTypes.string,
  size: PropTypes.string,
  hide: PropTypes.func
};

const defaultProps = {
  dummyClick: () => null,
  hide: () => null,
  showPlay: true,
  showLoad: false,
  className: 'relative',
  imgClassName: 'player-top', // top: "-16.82%"
  size: 'sddefault'
};

const YouTubeGetID = url => {
  url = url.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  return undefined !== url[2] ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
};

const DummyPlayer = ({ url, dummyClick, showPlay, showLoad, className, size, imgClassName }) => (
  <div
    className={classnames('w-full h-full aspect-ratio-16/9 overflow-hidden cursor-pointer',
    className)}
    // onClick={() => hide()}
    onClick={dummyClick}
  >
    <img
      className={classnames('pin-t pin-l absolute', imgClassName)}
      src={`http://img.youtube.com/vi/${YouTubeGetID(url)}/${size}.jpg`}
    />
    <div className="absolute transform-xy-center">
      {showPlay && (
        <i
          className="fa fa-play fa-2x text-white"
          style={{
            border: "1px solid #ffffffbf",
            padding: "4px 12px 4px 16px",
            color: "#ffffffbf"
          }}
          aria-hidden="true"
        />
      )}
      {showLoad && <BeatLoader color={"#fff"} loading={true} />}
    </div>
  </div>
);

DummyPlayer.propTypes = propTypes;

DummyPlayer.defaultProps = defaultProps;

export default DummyPlayer;
