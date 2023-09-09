import React from 'react';
import './ClientLayout.scss';

export function ClientLayout(props) {
  const { children } = props;
  return (
    <div>
      <h1>Cliente</h1>
      {children}
    </div>
  );
}
