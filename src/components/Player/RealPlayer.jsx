import React, { Component } from "react";
import classnames from "classnames";
import ReactPlayer from "react-player";

class RealPlayer extends Component {
  render() {
    const {
      play,
      pause,
      changeSong,
      isPlaying,
      stateIndex,
      songIndex,
      url,
      ready,
      isReady
    } = this.props;
    return (
      <div
        className={classnames(
          "w-full h-full relative aspect-ratio-16/9",
        )}
      >
        <ReactPlayer
          onPlay={() => play(songIndex)}
          onPause={() => pause(songIndex)}
          onEnded={() => changeSong()}
          playing={isPlaying && stateIndex === songIndex ? true : false}
          onReady={() => ready()}
          url={url}
          className="pin-t pin-l absolute"
          width="100%"
          height="100%"
          controls
          config={{
            youtube: {
              playerVars: { modestbranding: 0 }
            },
            soundcloud: {
              options: {
                show_artwork: true,
                show_playcount: false,
                show_user: false,
                sharing: false
              }
            }
          }}
        />
      </div>
    );
  }
}

export default RealPlayer;
