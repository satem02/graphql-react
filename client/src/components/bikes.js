import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_BIKES } from "../proxy/graphql/queries"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Bikes() {
  const { error, loading, data } = useQuery(LOAD_BIKES);
  const [bikes, setBikes] = useState([]);
  useEffect(() => {
    if (data) {
        setBikes(data.bikes);
    }
  }, [data]);

  return (
    <div>
     {" "}

<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">bike_id</TableCell>
            <TableCell align="right">lat</TableCell>
            <TableCell align="right">lon</TableCell>
            <TableCell align="right">is_reserved</TableCell>
            <TableCell align="right">is_disabled</TableCell>
            <TableCell align="right">vehicle_type</TableCell>
            <TableCell align="center">android</TableCell>
            <TableCell align="center">ios</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bikes.map((row) => (
            <TableRow
              key={row.bike_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.bike_id}
              </TableCell>
              <TableCell align="right">{row.lat}</TableCell>
              <TableCell align="right">{row.lon}</TableCell>
              <TableCell align="right">{row.is_reserved}</TableCell>
              <TableCell align="right">{row.is_disabled}</TableCell>
              <TableCell align="right">{row.vehicle_type}</TableCell>
              <TableCell align="right">{row.android}</TableCell>
              <TableCell align="right">{row.ios}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default Bikes;