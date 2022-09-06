import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import Menu from '../elements/ui/menu/Menu';
import Logo from '../../Logo';

const Sidebar = () => {
  const APP_NAME = process.env.REACT_APP_NAME;
  return (      
    <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
      <div className="app-brand demo">
        <Link to="/dashboard" className="app-brand-link" key="dashboard-link">
          <span className="app-brand-logo demo">
            <Logo />
          </span>
          <span className="app-brand-text demo menu-text fw-bolder ms-2">{APP_NAME}</span>
        </Link>

        <Link to="#" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none" key="toggle-link">
          <i className="bx bx-chevron-left bx-sm align-middle"></i>
        </Link>
      </div>
      <div className="menu-inner-shadow"></div>
      <Menu />
    </aside>
  );
}
  
export default Sidebar;