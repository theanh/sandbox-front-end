import React from 'react';

export default ({ dataid, itemSelected, children }) => (
  <a href="children" key={dataid} onClick={itemSelected}>{children}</a>
);
