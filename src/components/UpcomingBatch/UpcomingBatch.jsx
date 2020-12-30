import React from "react";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { TablePagination } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

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
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
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
  };
});

function UpcomingBatch({ batches, rowsPerPage }) {
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
              {batches
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
          count={batches.length}
          rowsPerPageOptions={[rowsPerPage]}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
        />
      </details>
    </div>
  );
}

export default UpcomingBatch;
