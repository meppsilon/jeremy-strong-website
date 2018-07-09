import React from 'react';

const Menu = ({ open, openMenu }) => (
  <div style={{ height: 21, width: 35 }}>
    {open ? (
      <i
        className="fa fa-times fa-lg links-social text-white"
        style={{ paddingTop: '4px' }}
        onClick={() => openMenu(false)}
      />
    ) : (
      <i
        className="fa fa-bars fa-lg links-social text-white"
        style={{ paddingTop: '4px' }}
        onClick={() => openMenu(true)}
      />
    )}
  </div>
);

export default Menu;
