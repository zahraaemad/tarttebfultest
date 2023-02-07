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
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { Button } from '@mui/material';





const UserList = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={6} md={3} sx={{ background: "#f8f7f9" }}>
            <h2 style={{ color: "#787eff",fontWeight:'500', marginLeft:'2rem' }}>Operations</h2>
            <List>
              <ListItem >
                <ListItemButton>
                  <ListItemText primary="Overview" />
                </ListItemButton>
              </ListItem>

              <ListItem >
                <ListItemButton>
                  <ListItemText primary="Task rules" />
                </ListItemButton>
              </ListItem>

              <ListItem >
                <ListItemButton>
                  <ListItemText primary="Teammates" />
                </ListItemButton>
              </ListItem>

              <ListItem >
                <ListItemButton>
                  <ListItemText primary="Notification rules" />
                </ListItemButton>
              </ListItem>

              <ListItem >
                <ListItemButton>
                  <ListItemText primary="Task Calender" />
                </ListItemButton>
              </ListItem>

              <ListItem >
                <ListItemButton>
                  <ListItemText primary="Log" />
                </ListItemButton>
              </ListItem>

            </List>
          </Grid>

          <Grid item xs={6} md={9}>

            <Grid container spacing={6} className='match-height'>
              <Grid item xs={12} sm={3} md={4}>
                <Card>
                  <CardContent>
                    <h4 style={{ color: "black" }}><span style={{ color: "#787eff" }}>1</span>  Task rules</h4>
                    <p style={{ fontSize: "0.8rem" }}> Create a task rule to automate the creation of jobs in relation with a reservation. Depending on your workflow, you can opt to assign manually, or auto-assign.  </p>
                  </CardContent>
                  <Button variant='outlined'
                    sx={{ textTransform: "none", marginLeft: "1rem", marginBottom: "1rem", fontSize: "0.8rem" }} >
                    Manage task rules</Button>
                </Card>
              </Grid>
              <Grid item xs={12} sm={3} md={4}>
                <Card>
                  <CardContent>
                    <h4 style={{ color: "black" }}><span style={{ color: "#787eff" }}>0</span>  Teammates</h4>
                    <p style={{ fontSize: "0.8rem" }}>  Create a task rule to automate the creation of jobs in relation with a reservation. Depending on your workflow, you can opt to assign manually, or auto-assign.  </p>
                  </CardContent>
                  <Button variant='outlined'
                    sx={{ textTransform: "none", marginLeft: "1rem", marginBottom: "1rem", fontSize: "0.8rem" }} >
                    Manage teammates</Button>
                </Card>
              </Grid>
              <Grid item xs={12} sm={3} md={4}>
                <Card>
                  <CardContent>
                    <h4 style={{ color: "black" }}><span style={{ color: "#787eff" }}>14</span>  Notification rules</h4>
                    <p style={{ fontSize: "0.8rem" }}>  Create a task rule to automate the creation of jobs in relation with a reservation. Depending on your workflow, you can opt to assign manually, or auto-assign.  </p>
                  </CardContent>
                  <Button variant='outlined'
                    sx={{ textTransform: "none", marginLeft: "1rem", marginBottom: "1rem", fontSize: "0.8rem" }} >
                    Manage notifications</Button>
                </Card>
              </Grid>
            </Grid>

            <h3 style={{ marginLeft: "1rem", color: "black", marginBottom: "0rem" }} >Unassigned tasks</h3>
            <p style={{ marginLeft: "1rem", fontSize: "0.8rem", marginTop: "0rem" }}>These are the tasks which are auto created but not assigned to any teammate yet</p>
            <Card sx={{ height: '15rem', textAlign: "center" }}>
              <CardContent sx={{ marginTop: "3rem" }} >
                <Button variant='outlined'
                  sx={{ textTransform: "none", marginLeft: "1rem", marginBottom: "1rem", fontSize: "0.8rem" }} >
                  Task calender</Button>
                <p sx={{ color: "black" }}>
                  You don't have any unassigned tasks
                </p>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

      </CardContent>
    </Card>
  )
}



export default UserList
