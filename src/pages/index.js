import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import get from "lodash/get";
import BackgroundMedia from "../components/BackgroundMedia";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import BannerContent from "../components/BannerContent";

export default class IndexPage extends React.Component {
  render() {
    console.log("data", this.props);
    const {
      data: {
        sections: { edges: sections }
      }
    } = this.props;

    const siteTitle = "Jeremy Strong";

    return (
      <div className="bg-black-true">
        <BackgroundMedia />
        <Navbar sections={sections} />
        <BannerContent sections={sections} siteTitle={siteTitle} />
        <div>
          {sections.map(({ node: { fields: { slug }, frontmatter: { title } } }) => {
            const sectionPosts = get(
              this.props.data,
              `${title.toLowerCase()}Posts`
            );
            if (sectionPosts)
              return <Section title={title} posts={sectionPosts} slug={slug}/>;
          })}
        </div>{" "}
      </div>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    sections: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___index] },
      filter: { frontmatter: { templateKey: { regex: "/\\w*-page/" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
          }
        }
      }
    }
    musicPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "post-detail" }, section: { eq: "music" } }}
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            link
          }
        }
      }
    }
    choreographyPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "post-detail" }, section: { eq: "choreography" } }}
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            link
          }
        }
      }
    }
    fitnessPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "post-detail" }, section: { eq: "fitness" } }}
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            link
          }
        }
      }
    }
  }
`;
