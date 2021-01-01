import React from "react";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
} from "@material-ui/core";

import ButtonLink from "./../../ButtonLink";
import "./styles.css";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 12,
    padding: "8px",
  },
}))(TableCell);

const StyledTableHeadCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#d9edf7",
    color: theme.palette.common.black,
    fontSize: "18px",
    fontWeight: 700,
    padding: "8px",
  },
  body: {
    fontSize: "18px",
    fontWeight: 700,
    padding: "8px",
  },
}))(TableCell);

const StyledTableHead = withStyles((theme) => ({
  root: {
    backgroundColor: "#d9edf7",
  },
}))(TableHead);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#F9F9F9",
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => {
  return {
    summary: {
      cursor: "pointer",
      fontWeight: 700,
      lineHeight: 1,
      margin: 0,
      padding: "15px",
      borderBottom: "1px solid #d4d4d4",
      outline: "none",
    },
    buttonLink: {
      textDecoration: "none",
      "& :hover": {
        backgroundColor: "#398b00",
      },
    },
    button: {
      margin: "20px 0px",
      backgroundColor: "#398b00",
    },
  };
});

function UpcomingBatch({ batch, rowsPerPage }) {
  const classes = useStyles();

  const [page, setPage] = React.useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      <details className={classes.details}>
        <summary className={classes.summary}>
          <span>Upcoming Batch - View Schedule</span>
        </summary>
        <TableContainer component={Paper}>
          <Table aria-label="schedule-table">
            <StyledTableHead>
              <TableRow>
                <StyledTableHeadCell>Class Number</StyledTableHeadCell>
                <StyledTableHeadCell>Day</StyledTableHeadCell>
                <StyledTableHeadCell>Time</StyledTableHeadCell>
              </TableRow>
            </StyledTableHead>
            <TableBody>
              {batch.classes
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <StyledTableRow key={row.classNumber}>
                    <StyledTableCell>{row.classNumber}</StyledTableCell>
                    <StyledTableCell>{row.day}</StyledTableCell>
                    <StyledTableCell>{row.time}</StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          count={batch.classes.length}
          rowsPerPageOptions={[rowsPerPage]}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
        />
      </details>
      <ButtonLink href="#">Book Now</ButtonLink>
    </div>
  );
}

export default UpcomingBatch;
