import React from 'react';
import '../styles/Navbar.css';

const styles = {
  navbarStyle: {
    background: 'green',
    justifyContent: 'flex-end',
  },
};


function Navbar({ handlePageChange }) {
  return (
    <div>
      <div className="heading">
        <a className="links" href="#about" onClick={() => handlePageChange("About")}>About Me</a>
      </div>
      <div className="heading">
        <a className="links" href="#projects" onClick={() => handlePageChange("Projects")}>Projects</a>
      </div>
      <div className="heading">
        <a className="links" href="#contact" onClick={() => handlePageChange("Contact")}>Contact</a>
      </div>
    </div>
  );
}

export default Navbar;