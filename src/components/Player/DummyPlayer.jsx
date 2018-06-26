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
  hide: PropTypes.func
};

const defaultProps = {
  dummyClick: () => null,
  hide: () => null,
  showPlay: true,
  showLoad: false,
  className: 'relative'
};

const YouTubeGetID = url => {
  url = url.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  return undefined !== url[2] ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
};

const DummyPlayer = ({ url, dummyClick, showPlay, showLoad, className }) => (
  <div
    className={classnames('w-full h-0 aspect-ratio-16/9 overflow-hidden',
    className)}
    // onClick={() => hide()}
    onClick={dummyClick}
  >
    <img
      className="pin-t pin-l absolute"
      style={{ top: "-16.82%" }}
      src={`http://img.youtube.com/vi/${YouTubeGetID(url)}/hqdefault.jpg`}
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
