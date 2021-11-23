import React from 'react';

const styles = {
  footer: {
      left: 0,
      bottom: 0,
      width: '100%',
      textAlign: 'center',
      padding: 20,
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
    <div style={styles.feet}><a style={styles.feetLinks} href="https://github.com/Sav2234" target="_blank">Github</a></div>
  </div>
);
}

export default Footer;