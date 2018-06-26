import React from 'react';
import Breakpoints from '../../utils/Breakpoints';
import { sm } from '../../css/tailwind/screenSizes';
import Navbar from './Navbar';

const NavbarBreakpoint = props => (
  <Breakpoints
    settings={{ smallest: true }}
    breakpoints={[
      {
        breakpoint: sm,
        smallest: false,
      },
    ]}
  >
    {({ smallest }) => <Navbar smallest={smallest} {...props} />}
  </Breakpoints>
);

export default NavbarBreakpoint;
