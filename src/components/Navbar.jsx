import React, { Component } from "react";
import Link from "gatsby-link";
import classnames from "classnames";
import animate from "../utils/animate";
import Breakpoints from "../utils/Breakpoints";
import { sm } from "../css/tailwind/screenSizes";
import SocialMedia from "./SocialMedia";
import Menu from "./Menu";

class Navbar extends Component {
  state = { open: false, scrolled: false };

  checkIfScrolled = () => {
    const offset = window.pageYOffset;
    if (offset > 0 && !this.state.scrolled) {
      this.setState({ scrolled: true });
    } else if (offset === 0 && this.state.scrolled) {
      this.setState({ scrolled: false });
    }
  };

  componentDidMount = () => {
    window.addEventListener("scroll", this.checkIfScrolled);
  };

  render() {
    const { sections } = this.props;
    return (
      <Breakpoints
        settings={{ smallest: true }}
        breakpoints={[
          {
            breakpoint: sm,
            smallest: false
          }
        ]}
      >
        {({ smallest }) => (
          <div
            className={classnames(
              "py-2 w-full z-50 fixed sm:absolute",
              (this.state.scrolled || this.state.open) && "navbar-bg"
            )}
          >
            <div className="flex">
              <SocialMedia />
              {smallest && (
                <i
                  className="fa fa-bars fa-lg links-social text-white"
                  style={{ paddingTop: "4px" }}
                  onClick={() => this.setState({ open: !this.state.open })}
                />
              )}
              {!smallest && (
                <div className="font-semibold text-sm">
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
            {this.state.open && <Menu sections={sections} hideMenu={() => this.setState({ open: false })}/>}
          </div>
        )}
      </Breakpoints>
    );
  }
}

export default Navbar;
