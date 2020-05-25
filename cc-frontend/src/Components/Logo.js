import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import cc_logo from "../cc_logo.png";

const useStyles = makeStyles((theme) => ({
  hlogo: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
}));

export default function Logo() {
  const classes = useStyles();
  return (
    <img className="hlogo" src={cc_logo}/>
  );
}