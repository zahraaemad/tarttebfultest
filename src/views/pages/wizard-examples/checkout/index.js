// ** React Imports
import { useState, useEffect, useCallback } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { Button } from '@mui/material';





const UserList = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
}

const CheckoutWizard = () => {

  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={6} md={3} sx={{ background: "#f8f7f9" }}>
            <h2 style={{ color: "#787eff", fontWeight: '500', marginLeft: '2rem' }}>Settings</h2>
            <List>
              <ListItem >
                <ListItemButton>
                  <ListItemText primary="Profile" />
                </ListItemButton>
              </ListItem>

              <ListItem >
                <ListItemButton>
                  <ListItemText primary="Subscription" />
                </ListItemButton>
              </ListItem>

              <ListItem >
                <ListItemButton>
                  <ListItemText primary="User Management" />
                </ListItemButton>
              </ListItem>

              <ListItem >
                <ListItemButton>
                  <ListItemText primary="General" />
                </ListItemButton>
              </ListItem>

              <ListItem >
                <ListItemButton>
                  <ListItemText primary="Notification" />
                </ListItemButton>
              </ListItem>



            </List>
          </Grid>

          <Grid item xs={6} md={9}>


            <h2
              style={{ marginLeft: "1rem", color: "black", marginTop: "3rem", fontWeight: '500' }} >
              Personal info
            </h2>
            <Divider variant="middle" />

            <TextField fullWidth label="First name"  sx={{margin:'0.5rem',width:'80%'}} />
            <TextField fullWidth label="Last name"  sx={{margin:'0.5rem',width:'80%'}} />
            <TextField fullWidth label="E-mail" sx={{margin:'0.5rem',width:'80%'}} />
            <TextField fullWidth label="Phone"  sx={{margin:'0.5rem',width:'80%'}} />
            <Button variant='contained'
          sx={{ textTransform: "none", margin:'2rem', fontSize: "1rem" }} >
                   Save changes</Button>
          </Grid>
        </Grid>

      </CardContent>
    </Card>
  )
}

export default CheckoutWizard
