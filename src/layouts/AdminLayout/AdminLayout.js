import React from 'react';
import {} from './AdminLayout.scss';

export function AdminLayout(props) {
  const { children } = props;
  return (
    <div className="admin-layout">
      <div className="admin-layout__menu">
        <h1>Top Menu</h1>
      </div>
      <div className="admin-layout__main-content">{children}</div>
    </div>
  );
}
