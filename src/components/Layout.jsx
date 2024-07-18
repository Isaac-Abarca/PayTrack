/* eslint-disable react/prop-types */

import Header from './Header';
import Navbar from './NavBar';
import '../styles/Layout.css';

const Layout = ({ children, title}) => {
  return (
    <div className="layout">
      <Header title={title} />
      <div className="content-container">
        {children}
      </div>
      <Navbar />
    </div>
  );
};

export default Layout;
