import React from "react";
import ReactPlayer from "react-player";
import musicContent from "../content/music.js";

const MusicSection = () => (
  <div id="music" className="bg-black-true">
    <div className="sm:w-9/10 mx-auto">
      <div className="text-white py-2 text-center music-title text-3xl sm:text-left md:text-center">
        Music
      </div>
      <div className="md:flex md:flex-wrap md:justify-between">
        {musicContent.map(song => (
          <div className="text-white flex flex-col relative py-4 sm:flex-row md:flex-col md:w-3/10">
            <div className="flex justify-center relative sm:w-full">
              <div className="w-full h-full relative aspect-ratio-16/9">
                <ReactPlayer
                  url={song.link}
                  className="pin-t pin-l absolute"
                  width="100%"
                  height="100%"
                  controls
                />
              </div>
            </div>
            <div className="w-2/3 pt-3 mx-auto sm:pl-6 sm:pt-0 sm:w-full md:w-full md:pl-0 md:pt-3">
              <div className="text-center text-lg font-semibold sm:text-left md:text-center">
                {song.title}
              </div>
              <div
                className="text-center pt-2 text-sm font-medium sm:text-left md:text-center"
                style={{ color: "#bdbdbd" }}
              >
                {song.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default MusicSection;
