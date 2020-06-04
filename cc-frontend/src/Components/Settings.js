import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { mainListItems, secondaryListItems } from "./listItems";
import Title from "./Title";
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Slider from '@material-ui/core/Slider';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://www.commcurrency.com/">
        Community Currency
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  textfield:{
    height: 24,
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 400,
  },
}));

export default function Settings() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [value, setValue] = React.useState('Day');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Settings
          </Typography>
          {/* <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton> */}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        {/* /<List>{secondaryListItems}</List> */}
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={12} lg={12}>
              <Paper className={fixedHeightPaper}>
                <Title>Account Info</Title>
                  <Grid container  direction="column" >

                    <Grid container  direction="row" style={{ padding: 5 }}>
                      <Grid item xs={2}  >
                        <Typography component="p" variant="h6">
                          Name:
                        </Typography>
                      </Grid>
                      <Grid item xs={5}>
                        <TextField id="UserName" size="small" InputProps={{readOnly: true,}} variant="outlined" defaultValue="First Last"/>
                      </Grid>
                    </Grid>

                    <Grid container  direction="row" style={{ padding: 5 }}>
                      <Grid item xs={2} >
                        <Typography component="p" variant="h6">
                          Email:
                        </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <TextField id="Email" size="small"  variant="outlined" defaultValue="email@gmail.com"/>
                      </Grid>
                      <Grid item>
                        <FormControlLabel value="End" control={<Checkbox color="primary" />} label="Notify Me" labelPlacement="end"/>
                      </Grid>
                    </Grid>

                    <Grid container direction="column" >
                      <Grid item xs={7}>
                        <Typography id="percent-full" >
                          At what capcity?
                        </Typography>
                        <Slider
                          defaultValue={50}
                          aria-labelledby="percent-full"
                          valueLabelDisplay="auto"
                          step={10}
                          marks
                          min={10}
                          max={100}
                          />
                      </Grid>
                    </Grid>

                    <Grid container  direction="row" style={{ padding: 5 }}>
                      <Grid item xs={2} >
                        <Typography component="p" variant="h6">
                          Phone Number:
                        </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <TextField id="PhoneNum" size="small"  variant="outlined" defaultValue="123-456-7890"/>
                      </Grid>
                      <Grid item >
                        <FormControlLabel value="End" control={<Checkbox color="primary" />} label="Notify Me" labelPlacement="end"/>
                      </Grid>
                    </Grid>

                    <Grid container direction="column" >
                      <Grid item xs={7}>
                        <Typography id="percent-full" >
                          At what capcity?
                        </Typography>
                        <Slider
                          defaultValue={50}
                          aria-labelledby="percent-full"
                          valueLabelDisplay="auto"
                          step={10}
                          marks
                          min={10}
                          max={100}
                          />
                      </Grid>
                    </Grid>


                  </Grid>
              </Paper>
            </Grid>

          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
