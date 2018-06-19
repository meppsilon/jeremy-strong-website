import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import './all.sass';
import './generated.css';

const sections = [
  {
    id: 'music',
    title: 'Music',
    backgroundColor: 'black',
    color: 'white',
  },
  {
    id: 'choreography',
    title: 'Choreography',
    style: {
      backgroundColor: 'blue',
      color: 'white',
    },
  },
  {
    id: 'fitness',
    title: 'Fitness',
    style: {
      backgroundColor: 'green',
      color: 'white',
    },
  },
  {
    id: 'travel',
    title: 'Travel',
    style: {
      backgroundColor: 'red',
      color: 'white',
    },
  },
];

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Jeremy Strong" />
    <div
      style={{
        margin: '0 auto',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
