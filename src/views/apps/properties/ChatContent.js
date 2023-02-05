// ** React Imports
import { Fragment } from 'react'

// ** MUI Imports
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// ** Icon Imports
import Icon from 'src/@core/components/icon'


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Property1', 1, "", "Platform1"),
  createData('Property2', 2,"", "Platform2"),
  createData('Property3', 3, "", "Platform3"),

];
const ChatContent = props => {
 
 return (
<div>
<h1 style={{color:"black",fontSize:"20px" , marginLeft:"1rem"}}>All Properties</h1>
  <TableContainer component={Paper}>
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell>Property name</TableCell>
        <TableCell align="right">Listings</TableCell>
        <TableCell align="right">Sync</TableCell>
        <TableCell align="right">Platforms</TableCell>
     
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) => (
        <TableRow
          key={row.name}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell align="right">{row.calories}</TableCell>
          <TableCell align="right">{row.fat}</TableCell>
          <TableCell align="right">{row.carbs}</TableCell>
          <TableCell align="right">{row.protein}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
</div>
        )
   
}

export default ChatContent
