import React, { Component } from "react";
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
      url
    } = this.props;
    return (
      <ReactPlayer
        onPlay={() => play(songIndex)}
        onPause={() => pause(songIndex)}
        onEnded={() => changeSong()}
        playing={isPlaying && stateIndex === songIndex ? true : false}
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
    );
  }
}

export default RealPlayer;
