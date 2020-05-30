import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    "16 Mar, 2019",
    "Terminal 3",
    "Tupelo, MS",
    "VISA ⠀•••• 3719",
    5.4
  ),
  createData(
    1,
    "16 Mar, 3",
    "Terminal 2",
    "London, UK",
    "VISA ⠀•••• 2574",
    6.7
  ),
  createData(
    2,
    "16 Mar, 2019",
    "Terminal 3",
    "Boston, MA",
    "MC ⠀•••• 1253",
    1.2
  ),
  createData(
    3,
    "16 Mar, 2019",
    "Terminal 3 ",
    "Gary, IN",
    "AMEX ⠀•••• 2000",
    10.5
  ),
  createData(
    4,
    "15 Mar, 2019",
    "Terminal 1",
    "Long Branch, NJ",
    "VISA ⠀•••• 5919",
    4.3
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Deposits</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Location</TableCell>
            <TableCell align="right">Capacity (%)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more deposits
        </Link>
      </div>
    </React.Fragment>
  );
}
