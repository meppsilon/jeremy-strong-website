import React, { Component } from "react";
import Link from "gatsby-link";
import classnames from "classnames";
import animate from "../../utils/animate";
import Breakpoints from "../../utils/Breakpoints";
import { sm } from "../../css/tailwind/screenSizes";
import SocialMedia from "../SocialMedia";
import SmallMenu from "./SmallMenu";
import LargeMenu from "./LargeMenu";
import MenuButton from "./MenuButton";

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

  componentWillReceiveProps = (nextProps) => {
    if (!nextProps.smallest && this.state.open) {
      this.setState({ open: false });
    }
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.checkIfScrolled);
  };

  render() {
    const { sections, smallest } = this.props;
    const navbarIsColored = smallest && (this.state.scrolled || this.state.open);
    return (
      <div
        className={classnames(
          "py-2 w-full z-50 fixed pin-t sm:absolute",
          navbarIsColored && "navbar-bg"
        )}
      >
        <div className="flex">
          <SocialMedia />
          {smallest && (
            <MenuButton
              open={this.state.open}
              openMenu={bool => this.setState({ open: bool })}
            />
          )}
          {!smallest && <LargeMenu sections={sections} />}
        </div>
        {this.state.open && (
          <SmallMenu
            sections={sections}
            hideMenu={() => this.setState({ open: false })}
          />
        )}
      </div>
    );
  }
}

export default Navbar;
