import React, { Component } from 'react';
import cc_logo from "../cc_logo.png";


const useStyles = makeStyles((theme) => ({
  hlogo: {
    width: "400px",
    height: "auto",
  },
  header: {
    //border-bottom-style: solid,
    //border-bottom-color: rgb(180, 180, 180),
    padding: "10px",
    textAlign: left,
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className="header">
      <img className="hlogo" src={cc_logo}/>
    </div>
  );
}
