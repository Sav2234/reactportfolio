import React from 'react';
import '../styles/Section.css';

const styles = {
  footer: {
      left: 0,
      bottom: 0,
      width: '100%',
      textAlign: 'center',
      padding: 15,
    },
    feet: {
      fontSize: '18rem',
      display: 'inline',
      padding: 20,
    },
    feetLinks: {
      textDecoration: "none",
    }
};

function Footer() {
return (
  <div style={styles.footer}>
    <div style={styles.feet}></div>
  </div>
);
}

export default Footer;