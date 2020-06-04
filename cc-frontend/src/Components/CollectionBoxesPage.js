import React, { useState, useEffect} from 'react'
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Box, CssBaseline, Drawer, AppBar, Toolbar, Typography, Divider, Paper, IconButton, List } from "@material-ui/core";
import { Menu as MenuIcon, ChevronLeft as ChevronLeftIcon } from "@material-ui/icons";
import Copyright from './Copyright';
import { mainListItems, secondaryListItems } from "./listItems";
import BoxDataChart from  './BoxDataChart';


function CollectionBoxList(props) {
  const cbList = props.boxInfoList.sort((item1, item2) => {
    return item1.volume / item1.maxVolume < item2.volume / item2.maxVolume ? 1 : -1;
  }).map((boxInfo) => <CollectionBox key={boxInfo.name} boxInfo={boxInfo} />);
  return (
    <Grid container spacing={3}>
      {cbList}
    </Grid>
  );
}

function RGBtoString(r, g, b){
  console.log("#" + r.toString(16) + g.toString(16) + b.toString(16));
  var res = 256 * 256 * r + 256 * g + b;
  var out = res.toString(16);
  if (out.length === 5) {
    out = "0" + out;
  }
  console.log(out);
  return "#" + out;
}

function getColor(val, mx){
  console.log(val);
  console.log(mx);
  var mid = mx / 2;
  if (val > mid){
    var diff = mx - mid;
    return RGBtoString(255, Math.floor(255 - 255 * diff / mid), 0);
  }
  else {
    return RGBtoString(Math.floor(255 - 255 * val / mid), 255, 0);
  }
}

function CollectionBox(props) {
  console.log(props.boxInfo)
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  var fillPct = props.boxInfo.volume / props.boxInfo.maxVolume;

  return (
    <Grid item xs={12} md={8} lg={12}>
      <Paper className={fixedHeightPaper} style={{
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0
      }}>
        <Grid container direction="row" style={{height:'100%'}}>
          <Grid item xs={1}  zeroMinWidth noWrap>
            <div style={{
            backgroundColor: getColor(props.boxInfo.volume, props.boxInfo.maxVolume),
            width: 20,
            height: '100%'
            }}>
            </div>
            </Grid>
          <Grid item xs={4} zeroMinWidth style={{padding:20}}>
            <Typography variant='h4' noWrap>{props.boxInfo.name}</Typography>
            <Typography noWrap>{props.boxInfo.location}</Typography>
            <Typography>Current Volume: {props.boxInfo.volume}</Typography>
            <Typography>Max Volume: {props.boxInfo.maxVolume}</Typography>
            <Typography>Fullness: %{(100 * props.boxInfo.volume / props.boxInfo.maxVolume).toFixed(2)}</Typography>
          </Grid>
          <Grid item xs={4} style={{width: '100%'}}>
            <BoxDataChart data={props.boxInfo.chartData} />
          </Grid>
          
        </Grid>
      </Paper>
      
    </Grid>
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
    height: 240,
  },
}));


export default function CollectionBoxesPage(props) {
  const [boxInfoList, setBoxInfoList] = useState([]);
  useEffect(() => {
    props.api.boxData({id: 1}).then(function(result){
      setBoxInfoList(result.data);
      console.log(result);
    });
  }, [])
  
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
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
            Collection Boxes
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
          <CollectionBoxList boxInfoList={boxInfoList} />
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}