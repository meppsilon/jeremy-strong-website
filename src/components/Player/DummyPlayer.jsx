import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "../../utils/styles";
import { BeatLoader } from "react-spinners";
import youtubeGetId from "../../utils/youtubeGetId";

const propTypes = {
  url: PropTypes.string.isRequired,
  dummyClick: PropTypes.func,
  showPlay: PropTypes.bool,
  showLoad: PropTypes.bool,
  className: PropTypes.string,
  imgClassName: PropTypes.string,
  size: PropTypes.string,
  playButtonStyle: PropTypes.object,
  hide: PropTypes.func
};

const defaultProps = {
  dummyClick: () => null,
  hide: () => null,
  showPlay: true,
  showLoad: false,
  className: "relative",
  imgClassName: "player-top", // top: "-16.82%"
  size: "sddefault",
  playButtonStyle: {}
};

const DummyPlayer = ({
  url,
  dummyClick,
  showPlay,
  showLoad,
  className,
  size,
  imgClassName,
  playButtonStyle
}) => (
  <div
    className={classnames(
      "w-full h-full aspect-ratio-16/9 overflow-hidden cursor-pointer",
      className
    )}
    // onClick={() => hide()}
    onClick={dummyClick}
  >
    <img
      className={classnames("pin-t pin-l absolute", imgClassName)}
      src={youtubeGetId(url, size)}
    />
    <div className="absolute transform-xy-center">
      {showPlay && (
        <i
          className="fa fa-play fa-2x text-white"
          style={styles(
            {
              border: "1px solid white",
              padding: "4px 12px 4px 16px",
              color: "#ffffffbf"
            },
            playButtonStyle
          )}
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
