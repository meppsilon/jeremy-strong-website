import React from 'react';
import Breakpoints from '../../utils/Breakpoints';
import { md } from '../../css/tailwind/screenSizes';
import Section from './Section';

const SectionBreakpoint = props => (
  <Breakpoints
    settings={{ mediumScreen: false }}
    breakpoints={[
      {
        breakpoint: md,
        mediumScreen: true,
      },
    ]}
  >
    {({ mediumScreen }) => <Section mediumScreen={mediumScreen} {...props} />}
  </Breakpoints>
);

export default SectionBreakpoint;
