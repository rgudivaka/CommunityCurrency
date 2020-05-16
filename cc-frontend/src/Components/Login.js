import React from "react";
import "./Login.css";
import { makeStyles, styled } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import cc_logo from "../cc_logo.png";
import Button from "@material-ui/core/Button";
import { Link, Route } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const LoginButton = styled(Button)({
  background: "#3B54A5",
  color: "white",
  margin: 20,
});

const ForgotButton = styled(Button)({
  color: "#black",
  "font-size": "8px",
});

function App(props) {
  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item>
          <img className="logo" src={cc_logo} alt="logo"></img>
        </Grid>
        <Grid item>
          <FormControl className={classes.margin}>
            <InputLabel htmlFor="input-with-icon-adornment">
              Username
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid item>
          <TextField
            className={classes.margin}
            id="input-with-icon-textfield"
            label="Password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item>
          <Link to="/dashboard">
            <LoginButton variant="contained" color="primary">
              Login
            </LoginButton>
          </Link>
        </Grid>
        <Grid item>
          <ForgotButton variant="text">Forgot Username/Password?</ForgotButton>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
