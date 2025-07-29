import { Link } from 'react-router';
import React from 'react';

const Navbar: () => React.JSX.Element = () => {
  return <div className="navbar">
    <Link to="/">
      <p className="text-2xl font-bold text-gradient">RESUMIND</p>
    </Link>
    <Link to="/upload" className="primary-button w-fit">Upload Resume</Link>
  </div>;
};
export default Navbar;
