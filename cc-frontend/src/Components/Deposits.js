import React, { useState } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  const [date, setDate] = useState(new Date());
  return (
    <React.Fragment>
      <Title>Total Capacity</Title>
      <Typography component="p" variant="h4">
        80%
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        as of {date.getMonth() + "/" + date.getDate() + "/" + date.getYear()}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View Receptacles
        </Link>
      </div>
    </React.Fragment>
  );
}
