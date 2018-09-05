import React, { Component } from "react";
import Link, { navigateTo } from "gatsby-link";
import PropTypes from "prop-types";
import classnames from "classnames";
import Lightbox from "react-image-lightbox";
import 'react-image-lightbox/style.css';

const propTypes = {
  className: PropTypes.string,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  modalIsOpen: PropTypes.string.isRequired,
};

const defaultProps = {
  className: '',
};

class ImagePost extends Component {
  render() {
    const { image, className, onOpen, onClose, modalIsOpen } = this.props;
    return (
      <div
        className={classnames(
          "w-full h-full aspect-ratio-4/5 overflow-hidden cursor-pointer relative",
          className
        )}
        onClick={onOpen}
      >
        <i className="fa fa-camera absolute z-10 pin-t pl-1 pt-1" aria-hidden="true"></i>
        <img
          className="pin-t pin-l pin-b pin-r h-full cover absolute"
          src={image}
        />
        {modalIsOpen && (
          <Lightbox
            mainSrc={image}
            onCloseRequest={onClose}
          />
        )}
      </div>
    )
  }
}

ImagePost.propTypes = propTypes;
ImagePost.defaultProps = defaultProps;

export default ImagePost;
