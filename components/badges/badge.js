import React from 'react';

export default ({ color, title, icon, classes }) => (
  <div className={classes} style={{ width: 67 }}>
    <div className="badgestack">
      <div className={`hexagon badge-${color}`} />
      <i className={`fa fa-2x ${icon}`} />
    </div>
    <small className="text-muted">{title}</small>
  </div>
);
