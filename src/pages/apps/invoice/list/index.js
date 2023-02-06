// ** React Imports
import { useState, useEffect, forwardRef } from 'react'

// ** Next Import
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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function InvoiceList() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={6} md={3} sx={{ background: "#f8f7f9" }}>
            <h3 style={{ color: "#787eff" }}>Guest Experience</h3>
            <List>
              <ListItem >
                <ListItemButton>
                  <ListItemText primary="Overview" />
                </ListItemButton>
              </ListItem>

              <ListItem >
                <ListItemButton>
                  <ListItemText primary="Messaging rules" />
                </ListItemButton>
              </ListItem>

              <ListItem >
                <ListItemButton>
                  <ListItemText primary="Review rules" />
                </ListItemButton>
              </ListItem>

              <ListItem >
                <ListItemButton>
                  <ListItemText primary="Questions" />
                </ListItemButton>
              </ListItem>

              <ListItem >
                <ListItemButton>
                  <ListItemText primary="Custom codes" />
                </ListItemButton>
              </ListItem>

              <ListItem >
                <ListItemButton>
                  <ListItemText primary="Canned responses" />
                </ListItemButton>
              </ListItem>

              <ListItem >
                <ListItemButton>
                  <ListItemText primary="Log" />
                </ListItemButton>
              </ListItem>

              <ListItem >
                <ListItemButton>
                  <ListItemText primary="Setting" />
                </ListItemButton>
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={6} md={9}>

            <Grid container spacing={6} className='match-height'>
              <Grid item xs={12} sm={3} md={4}>
                <Card>
                  <CardContent>
                    <h2 style={{ color: "black" }}>6</h2>
                    <h4 style={{ color: "#787eff" }}>Active Messaging rules</h4>
                    <p style={{ fontSize: "0.8rem" }}> Rules are the building blocks that will create messages to your guests. They can be triggered after an event, scheduled ahead of time, or reply to a question. </p>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={3} md={4}>
                <Card>
                  <CardContent>
                    <h2 style={{ color: "black" }}>0</h2>
                    <h4 style={{ color: "#787eff" }}>Active Review rules</h4>
                    <p style={{ fontSize: "0.8rem" }}> Rules are the building blocks that will create messages to your guests. They can be triggered after an event, scheduled ahead of time, or reply to a question. </p>

                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={3} md={4}>
                <Card>
                  <CardContent>
                    <h2 style={{ color: "black" }}>0</h2>
                    <h4 style={{ color: "#787eff" }}>Active Question rules</h4>
                    <p style={{ fontSize: "0.8rem" }}> Rules are the building blocks that will create messages to your guests. They can be triggered after an event, scheduled ahead of time, or reply to a question. </p>

                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            <Box sx={{ width: '100%', marginTop: '3rem' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="Pending messages"  {...a11yProps(0)} />
                  <Tab label="Pending reviews" {...a11yProps(1)} />

                </Tabs>
              </Box>
              <TabPanel value={value} index={0} style={{ textAlign: "center" }}>
              You do not appear to have any scheduled messages 🤔.
              </TabPanel>
              <TabPanel value={value} index={1} style={{ textAlign: "center" }}>
              You do not appear to have any scheduled reviews 🤔.
              </TabPanel>

            </Box>
          </Grid>
        </Grid>

      </CardContent>
    </Card>
  )
}

export default InvoiceList
