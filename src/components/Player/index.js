import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import RealPlayer from "./RealPlayer";
import DummyPlayer from "./DummyPlayer";

const propTypes = {
  url: PropTypes.string.isRequired,
  className: PropTypes.string,
  play: PropTypes.func,
  pause: PropTypes.func,
  end: PropTypes.func,
  isPlaying: PropTypes.bool,
  stateIndex: PropTypes.number,
  songIndex: PropTypes.number,
  dummyClick: PropTypes.func,
  dummyMode: PropTypes.string
};

const defaultProps = {
  dummyClick: () => null,
  play: () => null,
  pause: () => null,
  end: () => null,
  className: "",
  isPlaying: null,
  stateIndex: "",
  songIndex: "",
  dummyMode: "load"
};

class Player extends Component {
  state = { ready: false, hide: false };

  ready = () => {
    setTimeout(() => {
      this.setState({ ready: true });
    }, 350);
  };
  render() {
    const {
      play,
      pause,
      end,
      changeSong,
      isPlaying,
      stateIndex,
      songIndex,
      url,
      className,
      dummyClick,
      dummyMode
    } = this.props;
    const showPlay = dummyMode === "load" ? false : true;
    const showLoad = dummyMode === "load" ? true : false;
    return (
      <div
        className={classnames(
          "flex justify-center relative sm:w-full cursor-pointer",
          className
        )}
      >
        <RealPlayer
          play={play}
          pause={pause}
          ready={() => this.ready()}
          end={end}
          isPlaying={isPlaying}
          stateIndex={stateIndex}
          songIndex={songIndex}
          url={url}
          isReady={this.state.ready}
        />
        {!this.state.ready && (
          <DummyPlayer
            url={url}
            loading={true}
            showPlay={showPlay}
            showLoad={showLoad}
            className={"absolute"}
            dummyClick={dummyClick}
          />
        )}
      </div>
    );
  }
}

Player.propTypes = propTypes;

Player.defaultProps = defaultProps;

export default Player;
