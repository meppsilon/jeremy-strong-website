import React from "react";
import ReactPlayer from "react-player";

const Modal = ({ exitModal }) => (
  <div
    className="w-screen h-screen fixed z-50 bg-black-true flex"
    style={{ opacity: 0.95 }}
  >
    <div style={{ height: '80%' }} className="w-full h-full relative aspect-ratio-16/9 my-auto">
      {/* <img
        className={'pin-t pin-l absolute'}
        src={`http://img.youtube.com/vi/${'4qJYPLWh7e8'}/${'sddefault'}.jpg`}
      /> */}
      <ReactPlayer
        url={"https://www.youtube.com/watch?v=4qJYPLWh7e8"}
        className="pin-t pin-l absolute"
        width="100%"
        height="100%"
        controls
        config={{
          youtube: {
            playerVars: {
              modestbranding: 0,
              fs: 0,
              playsInline: 1,
              showInfo: 0
            }
          }
        }}
      />
    </div>
    <div
      className="fixed pin-r pin-t text-2xl text-white font-semibold pt-2 pr-2 cursor-pointer"
      onClick={exitModal}
    >
      X
    </div>
  </div>
);

export default Modal;
