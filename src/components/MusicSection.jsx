import React from "react";
import ReactPlayer from "react-player";

const MusicSection = () => (
  <div id="music">
    <div className="bg-black-true">
      <div className="text-white py-2 text-center music-title text-3xl">
        Music
      </div>
      <div className="sm:flex sm:flex-wrap">
        <div className="text-white flex flex-col relative py-4 sm:w-2/5">
          <div className="flex justify-center relative">
            <div className="w-full h-full relative aspect-ratio-16/9">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                className="pin-t pin-l absolute"
                width="100%"
                height="100%"
                controls
              />
            </div>
          </div>
          <div className="w-2/3 mx-auto">
            <div className="text-center pt-3 text-lg font-semibold">
              Two Tone
            </div>
            <div
              className="text-center pt-2 text-sm font-medium"
              style={{ color: "#bdbdbd" }}
            >
              This is my first song off my new project. Let it ride
            </div>
          </div>
        </div>
        <div className="text-white flex flex-col relative py-4 sm:w-2/5">
          <div className="flex justify-center relative">
            <div className="w-full h-full relative aspect-ratio-16/9">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                className="pin-t pin-l absolute"
                width="100%"
                height="100%"
                controls
              />
            </div>
          </div>
          <div className="w-2/3 mx-auto">
            <div className="text-center pt-3 text-lg font-semibold">
              Two Tone
            </div>
            <div
              className="text-center pt-2 text-sm font-medium"
              style={{ color: "#bdbdbd" }}
            >
              This is my first song off my new project. Let it ride
            </div>
          </div>
        </div>
        <div className="text-white flex flex-col relative py-4 sm:w-2/5">
          <div className="flex justify-center relative">
            <div className="w-full h-full relative aspect-ratio-16/9">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                className="pin-t pin-l absolute"
                width="100%"
                height="100%"
                controls
              />
            </div>
          </div>
          <div className="w-2/3 mx-auto">
            <div className="text-center pt-3 text-lg font-semibold">
              Two Tone
            </div>
            <div
              className="text-center pt-2 text-sm font-medium"
              style={{ color: "#bdbdbd" }}
            >
              This is my first song off my new project. Let it ride
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// src="https://scontent-lax3-1.cdninstagram.com/vp/71c26a5f0b7821b987207ddd032c98c9/5BC0F89F/t51.2885-15/e35/30944464_606228469727505_3986757298922979328_n.jpg"
// src="https://scontent-lax3-1.cdninstagram.com/vp/22a708445e98a7a912217723cdfe8f62/5BB91B1D/t51.2885-15/e35/29094505_218856788863277_8434260478699503616_n.jpg"

export default MusicSection;
