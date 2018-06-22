import React, { Component } from "react";
import Link from "gatsby-link";
import classnames from "classnames";
import animate from "../utils/animate";
import Breakpoints from "../utils/Breakpoints";
import { md } from "../css/tailwind/screenSizes";
import SocialMedia from "./SocialMedia";

class Navbar extends Component {
  state = { open: false, scrolled: false };

  checkIfScrolled = () => {
    const offset = window.pageYOffset;
    if (offset > 0 && !this.state.scrolled) {
      this.setState({ scrolled: true })
    } else if (offset === 0 && this.state.scrolled) {
      this.setState({ scrolled: false })
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.animatedScroll)
  }

  animatedScroll = animate(this.checkIfScrolled);


  render() {
    const { sections } = this.props;
    // console.log('state', this.state.scrolled);
    return (
      <Breakpoints
        settings={{ showMenu: true }}
        breakpoints={[
          {
            breakpoint: md,
            showMenu: false
          }
        ]}
      >
        {({ showMenu }) => (
          <div className={classnames("flex pt-3 w-full z-50 fixed md:absolute", this.state.scrolled && "navbar-bg")}>
            <i className="fa fa-bars links-social text-white"></i>
            <SocialMedia />
            {!showMenu && (
              <div className="font-semibold text-sm ml-auto">
                {sections.map(({ node: { frontmatter: { title } } }, i) => (
                  <Link
                    className="text-white pr-2"
                    key={`section-${title.toLowerCase()}-${i}`}
                    to={`#${title.toLowerCase()}`}
                  >
                    {title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </Breakpoints>
    );
  }
}

export default Navbar;
