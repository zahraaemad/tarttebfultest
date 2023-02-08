// ** React Imports
import { useState, useEffect } from 'react'

// ** Next Import
import Link from 'next/link'
import * as React from 'react';
// ** MUI Imports
import Grid from '@mui/material/Grid'
import Alert from '@mui/material/Alert'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Divider from '@mui/material/Divider';

const options = ['This month', 'Last month','This year','Last year', 'Last week'];
const InvoicePreview = () => {

  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6} md={1}>
        </Grid>
        <Grid item xs={6} md={11}>

          <span
            style={{ color: "black", fontWeight: "500", display: 'inline-block', width: "60%", fontSize: "1.8rem" }}
          >Overview</span>
          <Autocomplete
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            id="controllable-states-demo"
            options={options}
            sx={{ width: 200, display: 'inline-block', marginBottom: '2rem' }}
            renderInput={(params) => <TextField {...params} />}
          />

          <Card style={{ width: "80%" }} >
            <CardContent>
              <h3 style={{ color: "black", fontWeight: "500" }}>Boost your direct bookings!</h3>
              <p>Direct by Tatrteebful.com. is a direct booking solution where you can<br /> build your own website that’s tailored to short-term rental bookings<br /> and syncs automatically with all your other OTAs.</p>
              <Button variant='contained'
                style={{ textTransform: "none" }}
              >Find out more</Button>
            </CardContent>
          </Card>
          <span
            style={{ color: "black", fontWeight: "500", display: 'inline-block', width: "67%", fontSize: "1.8rem", marginTop: '2rem' }}
          >Sites</span>
          <Button variant='contained'
            style={{ textTransform: "none", display: 'inline-block' }}>
            + Create new</Button>
          <Divider style={{ marginRight: '0rem' }} />
          <a  style={{ textDecoration: "none", display: "inline-block", width: "50%" }} >bare.Tatrteebful.rentals</a>
          <a  style={{ textDecoration: "none", display: "inline-block" }} >bare.Tatrteebful.rentals</a>
        </Grid>
      </Grid>
    </>
  )

}

export default InvoicePreview
