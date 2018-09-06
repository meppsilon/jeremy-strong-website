import React, { Component } from "react";
import Link, { navigateTo } from "gatsby-link";
import PropTypes from 'prop-types';
import Dotdotdot from "react-dotdotdot";
import Masonry from "react-masonry-component";
import Post from "../Post";

const propTypes = {
  titleClassName: PropTypes.string,
};

const defaultProps = {
  titleClassName: 'block font-bold music-title sm:text-left text-3xl text-center text-white',
}

class Section extends Component {
  renderChildren = () =>
    this.props.posts.edges
      .slice(0, this.props.limit)
      .map(({ node: { frontmatter: post, fields: { slug: slug } } }, i) => (
        <Post post={post} slug={slug} />
      ));

  render() {
    if (!this.props.posts || !this.props.posts.edges) return null;
    const { title, posts, slug, limit, titleClassName } = this.props;
    const sectionClassName = "md:flex md:flex-wrap md:-mx-4";
    const children = this.renderChildren();

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
          {posts.totalCount > limit && (
            <Link to={slug} className="flex items-center justify-center py-6">
              See more {title}
            </Link>
          )}
        </div>
      </div>
    );
  }
}

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;

export default Section;
