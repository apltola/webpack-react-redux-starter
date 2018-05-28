import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { pageTitle } from './layout.css';

const Layout = ({ children }) => {
  return (
    <div>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className={pageTitle}>
          webpack-for-react
        </div>
      </Link>
      {children}
    </div>
  )
}

export default Layout;
