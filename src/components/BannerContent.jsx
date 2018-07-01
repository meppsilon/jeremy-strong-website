import React from "react";
import Link, { navigateTo } from "gatsby-link";
import Modal from "./Modal";

class BannerContent extends React.Component {
  state = { showModal: false };

  render() {
    const { siteTitle, bannerTitle } = this.props;
    const { showModal } = this.state;
    return (
      <div className="w-screen flex h-screen">
        <div className="self-center absolute w-full flex flex-col text-white">
          <h1 className="text-center">
            <Link to="/" className="text-white" style={{ fontSize: "2.5rem" }}>
              {siteTitle}
            </Link>
          </h1>
          <div
            className="text-center mt-3 font-light"
            style={{ fontSize: "32px" }}
          >
            {bannerTitle}
          </div>
          {/* <div className="text-center pt-2">
        <i className="fa fa-play-circle-o fa-3x" aria-hidden="true"/>
      </div> */}

          <div className="text-center pt-2">
            <button
              className="text-center text-base border-white border-2 text-white text-base py-2 px-5"
              onClick={() => navigateTo('/posts/2018-06-19-try-you/')}
            >
              Watch Video
            </button>
          </div>
        </div>
        {showModal && <Modal exitModal={() => this.setState({ showModal: false })}/>}
      </div>
    );
  }
}

// import React from "react";
//
// class BackgroundMedia extends React.Component {
//   state = { showModal: false };
//
//   renderMedia = (mediaType, media) => (
//     mediaType === "image" ? (
//       <img className="h-screen w-screen flex absolute cover" src={media} />
//     ) : (
//       <video
//         autoplay
//         muted
//         loop
//         className="h-screen w-screen flex absolute cover"
//       >
//         <source src={media} type="video/mp4" />
//       </video>
//     )
//   )
//
//   renderModal = () => (
//     <div className="w-screen h-screen fixed bg-white z-50" />
//   )
//
//   render() {
//     const { mediaType, media } = this.props;
//     const { showModal } = this.state;
//     return (
//       <div onClick={() => this.setState({ showModal: true })}>
//         {showModal ? this.renderModal() : this.renderMedia(mediaType, media)};
//       </div>
//     );
//   }
// }

export default BannerContent;
