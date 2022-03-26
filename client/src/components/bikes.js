import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_BIKES } from "../proxy/graphql/queries"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Switch from '@mui/material/Switch';
import LinkSharpIcon from '@mui/icons-material/LinkSharp';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Bikes() {
  const [filterInput, setFilterInput] = useState("");
  const { error, loading, data } = useQuery(LOAD_BIKES, { variables: { bike_id: filterInput } });
  const [bikes, setBikes] = useState([]);
  const handleFilterChange = e => {
    const value = e.target.value || undefined;
    setFilterInput(value);
  };

  useEffect(() => {
    if (data) {
      setBikes(data.bikes);
    }
  }, [data]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            <TextField 
              id="bike-id" 
              label="Bike Id" 
              variant="outlined" 
              value={filterInput} 
              onChange={handleFilterChange}
              placeholder={"Search Bike By Id"} />
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Bike Id</TableCell>
                    <TableCell align="center">Lat</TableCell>
                    <TableCell align="center">Lon</TableCell>
                    <TableCell align="center">Is Reserved</TableCell>
                    <TableCell align="center">Is Disabled</TableCell>
                    <TableCell align="center">Vehicle Type</TableCell>
                    <TableCell align="center">Android</TableCell>
                    <TableCell align="center">IOS</TableCell>
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
                      <TableCell align="center">{row.lat}</TableCell>
                      <TableCell align="center">{row.lon}</TableCell>
                      <TableCell align="center">
                        <Switch checked={row.is_reserved == 0 ? false : true} />
                      </TableCell>
                      <TableCell align="center">
                        <Switch checked={row.is_disabled == 0 ? false : true} />
                      </TableCell>
                      <TableCell align="center">{row.vehicle_type}</TableCell>
                      <TableCell align="center">
                        <Link target="_blank" href={`${row.android}`} underline="none">
                          <LinkSharpIcon />
                        </Link>
                      </TableCell>
                      <TableCell align="center">
                        <Link target="_blank" href={`${row.ios}`} underline="none">
                          <LinkSharpIcon />
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Item>
        </Grid>

      </Grid>
    </Box>

  );
}

export default Bikes;