import React, { Component } from "react";
import Link, { navigateTo } from "gatsby-link";
import PropTypes from 'prop-types';
import Dotdotdot from "react-dotdotdot";
import Masonry from "react-masonry-component";
import Post from "../Post";
import ImagePost from '../ImagePost';

const propTypes = {
  titleClassName: PropTypes.string,
};

const defaultProps = {
  titleClassName: 'block font-bold music-title sm:text-left text-3xl text-center text-white',
}

class Section extends Component {
  state = { photoIndex: -1 };

  renderChildren = () => {
    const { posts, events } = this.props;
    const { photoIndex } = this.state;
    if (posts) {
      return posts.edges
        .slice(0, this.props.limit)
        .map(({ node: { frontmatter: post, fields: { slug: slug } } }, i) => (
          <Post post={post} slug={slug} />
        ));
    } else if (events) {
      return events.edges.map(({ node: { frontmatter: event } }) => (
        <div className="w-full my-6">
          <h2 className="text-center my-6">{event.title}</h2>
          <div className="md:flex md:flex-wrap md:-mx-4">
            {event.photos.map((photo, i) => (
              <div className="md:w-100 md:px-4 py-4">
                <ImagePost
                  image={photo.photo}
                />
              </div>
            ))}
          </div>
        </div>
      ));
    }
  }

  renderSeeMore = () => {
    const { posts, events, limit } = this.props;
    if (events) {
      return null;
    } else if (posts) {
      return posts.totalCount > limit && (
        <Link to={slug} className="flex items-center justify-center py-6">
          See more {title}
        </Link>
      );
    }
  }

  render() {
    // if (!this.props.posts || !this.props.posts.edges) return null;
    const { title, posts, slug, limit, titleClassName } = this.props;
    const sectionClassName = "md:flex md:flex-wrap md:-mx-4";
    const children = this.renderChildren();
    const seeMore = this.renderSeeMore();

    return (
      <div id={title.toLowerCase()} className="Section">
        <div className="SectionBody mx-auto sm:w-9/10 py-6">
          <Link
            className={titleClassName}
            to={`/${title.toLowerCase()}`}
          >
            {title}
          </Link>
          {this.props.mediumScreen ? (
            <Masonry
              className={sectionClassName}
            >
              {children}
            </Masonry>
          ) : (
            <div className="md:flex md:flex-wrap md:-mx-4">
              {children}
            </div>
          )}
          {seeMore}
        </div>
      </div>
    );
  }
}

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;

export default Section;
