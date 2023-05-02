import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Header from "../../components/Header/header";

export default function analysis() {
  function createData(name, rank1, rank2) {
    return { name, rank1, rank2 };
  }

  const rows = [
    createData("Hyundai Kona.", 1, 2),
    createData("TATA TIGOR.", 3, 3),
    createData("MG ZS.  ", 4, 7),
    createData("Strom motors R3 ", 7, 6),
    createData("Mahindra Everito.  ", 5, 5),
    createData("TATA NEXON.  ", 2, 1),
    createData("Mahindra ezo plus.  ", 6, 4),
  ];

  return (
    <div className="w-full">
      <Header />

      <div className="flex flex-col justify-center items-center w-4/6 m-auto ">
        <div className="text-20 font-700 w-full flex justify-center text-Browser my-[10vh]">
          Analysis
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow className="bg-Browser">
                <TableCell>Electric car</TableCell>
                <TableCell align="center"> Rank (MOORA)</TableCell>
                <TableCell align="center"> Rank (TOPSIS)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  className="hover:bg-tertiary"
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.rank1}</TableCell>
                  <TableCell align="center">{row.rank2}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className="my-20 text-14 text-secondaryText">These ranking are based on latest analysis</div>
      </div>
    </div>
  );
}
