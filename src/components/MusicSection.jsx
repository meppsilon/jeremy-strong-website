import React from "react";

const MusicSection = () => (
  <div id="music">
    <div className="" style={{ backgroundColor: "black" }}>
      <div className="text-white py-2 text-center music-title text-3xl">Music</div>
      <div>
        <div className="text-white flex flex-col relative overflow-hidden py-4">
          <img
            className="absolute"
            style={{ filter: "blur(150px)" }}
            src="https://scontent-lax3-1.cdninstagram.com/vp/03cc652d86758efbe2cf2ef25cb9285b/5BB19688/t51.2885-15/e35/33703135_2110571918972588_6259804345886310400_n.jpg"
          />
          <div className="flex z-10 justify-center relative">
            <img
              style={{ width: "284px", height: "250px" }}
              className="m-auto cover self-center"
              src="https://scontent-lax3-1.cdninstagram.com/vp/03cc652d86758efbe2cf2ef25cb9285b/5BB19688/t51.2885-15/e35/33703135_2110571918972588_6259804345886310400_n.jpg"
            />
            <i className="material-icons absolute self-center" style={{ fontSize: '56px' }}>play_arrow</i>
          </div>
          <div
            className="text-center pt-3 text-lg font-semibold z-10 m-auto"
            style={{ width: "284px" }}
          >
            Two Tone
          </div>
          <div
            className="text-center pt-2 z-10 m-auto text-sm font-medium"
            style={{ width: "284px", color: "#bdbdbd" }}
          >
            This is my first song off my new project. Let it ride
          </div>
        </div>
        <div className="text-white flex flex-col relative overflow-hidden py-4">
          {/* <img
            className="absolute"
            style={{ filter: 'blur(150px)' }}
            src="https://scontent-lax3-1.cdninstagram.com/vp/71c26a5f0b7821b987207ddd032c98c9/5BC0F89F/t51.2885-15/e35/30944464_606228469727505_3986757298922979328_n.jpg"
          /> */}
          <div className="flex z-10 justify-center">
            <img
              style={{ width: "284px", height: "250px" }}
              className="m-auto cover self-center"
              src="https://scontent-lax3-1.cdninstagram.com/vp/71c26a5f0b7821b987207ddd032c98c9/5BC0F89F/t51.2885-15/e35/30944464_606228469727505_3986757298922979328_n.jpg"
            />
            <i className="material-icons absolute self-center" style={{ fontSize: '56px' }}>play_arrow</i>
          </div>
          <div
            className="text-center pt-3 text-lg font-semibold z-10 m-auto"
            style={{ width: "284px" }}
          >
            Two Sick
          </div>
          <div
            className="text-center pt-2 z-10 m-auto text-sm font-medium"
            style={{ width: "284px", color: "#bdbdbd" }}
          >
            I was really feeling this vibe one night and decided to turn it into
            a song
          </div>
        </div>
        <div className="text-white flex flex-col relative overflow-hidden py-4">
          <img
            className="absolute"
            style={{ filter: "blur(150px)" }}
            src="https://scontent-lax3-1.cdninstagram.com/vp/22a708445e98a7a912217723cdfe8f62/5BB91B1D/t51.2885-15/e35/29094505_218856788863277_8434260478699503616_n.jpg"
          />
          <div className="flex z-10 justify-center">
            <img
              style={{ width: "284px", height: "250px" }}
              className="m-auto cover self-center"
              src="https://scontent-lax3-1.cdninstagram.com/vp/22a708445e98a7a912217723cdfe8f62/5BB91B1D/t51.2885-15/e35/29094505_218856788863277_8434260478699503616_n.jpg"
            />
            <i className="material-icons absolute self-center" style={{ fontSize: '56px' }}>play_arrow</i>
          </div>
          <div
            className="text-center pt-3 text-lg font-semibold z-10 m-auto"
            style={{ width: "284px" }}
          >
            Two Nice
          </div>
          <div
            className="text-center pt-2 z-10 m-auto text-sm font-medium"
            style={{ width: "284px", color: "#bdbdbd" }}
          >
            I'm tired of being chill
          </div>
        </div>
      </div>
    </div>
  </div>
);

// src="https://scontent-lax3-1.cdninstagram.com/vp/71c26a5f0b7821b987207ddd032c98c9/5BC0F89F/t51.2885-15/e35/30944464_606228469727505_3986757298922979328_n.jpg"
// src="https://scontent-lax3-1.cdninstagram.com/vp/22a708445e98a7a912217723cdfe8f62/5BB91B1D/t51.2885-15/e35/29094505_218856788863277_8434260478699503616_n.jpg"

export default MusicSection;
