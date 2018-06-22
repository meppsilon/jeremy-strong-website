import React, { Component } from "react";
import { ClipLoader } from "react-spinners";
import classnames from "classnames";
import RealPlayer from "./RealPlayer";
import DummyPlayer from "./DummyPlayer";

class Player extends Component {
  state = { ready: false, hide: false };

  ready = () => {
    setTimeout(() => {
      this.setState({ ready: true });
    }, 1500);
  };
  render() {
    const {
      play,
      pause,
      changeSong,
      isPlaying,
      stateIndex,
      songIndex,
      url
    } = this.props;
    const showDummy = !this.state.ready && !this.state.hide;
    const showLoader = !this.state.ready && this.state.hide;
    return (
      <div className="flex justify-center relative sm:w-full cursor-pointer">
        {/* <RealPlayer
          play={play}
          pause={pause}
          ready={() => this.ready()}
          changeSong={changeSong}
          isPlaying={isPlaying}
          stateIndex={stateIndex}
          songIndex={songIndex}
          url={url}
          isReady={this.state.ready}
        /> */}

        <DummyPlayer url={url} hide={() => this.setState({ hide: true })} />

        {/* {showLoader && (
            <ClipLoader color={"#141414"} loading={true} />
          )} */}
      </div>
    );
  }
}

export default Player;
