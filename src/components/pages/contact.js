import React, { useState } from 'react';

const styles= {
  inputs: {
    width: "100%",
    padding: "12px 20px",
    margin: "8px 0",
    boxSizing: "border-box"
  },
  buttons: {
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    display: "inline-block",
    fontSize: "16px",
    background: "green"
  }
}

function Form() {

  return (
    <div>
      <h1>Contact Me</h1>
      <a href="mailto:s.e.williams2001@gmail.com">Click here to email me</a>
    </div>
  );
}

export default Form;