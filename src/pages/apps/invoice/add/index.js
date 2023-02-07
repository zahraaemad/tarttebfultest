// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Button } from '@mui/material'
// ** Icon Imports
import Icon from 'src/@core/components/icon'

const InvoiceAdd = () => {


  return (
    <>
      <h3 style={{ color: "black", fontWeight: "500", fontSize: "1.8rem" }} >Hello Ahmed, how can we help you?</h3>
      <TextField sx={{ width: '90%' }} id="outlined-basic" label="Ask us something" variant="outlined" />
      <Grid container spacing={2} style={{ marginTop: '4rem' }}>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={2}>
                  <Icon icon='mdi:question-mark' fontSize={60} 
                  style={{ marginTop: "1.5rem", color: "#666cff",border:'solid',borderRadius:'50%',padding:'0.5rem'}} />

                </Grid>
                <Grid item xs={10}>
                  <h3 style={{ color: "black", fontWeight: "500" }}>Contact support</h3>
                  <p> Contact our support team on live chat now. </p>
                </Grid>

              </Grid>

            </CardContent>
          </Card>

        </Grid>
        <Grid item xs={6}>

          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={2}>
                  <Icon icon='mdi:call' fontSize={60} 
                  style={{ marginTop: "1.5rem", color: "#666cff",border:'solid',borderRadius:'50%',padding:'0.5rem'}} />

                </Grid>
                <Grid item xs={10}>
                  <h3 style={{ color: "black", fontWeight: "500" }}>Schedule a Zoom call</h3>
                  <p> Schedule a call with our product specialists. </p>
                </Grid>

              </Grid>

            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={2}>
                  <Icon icon='mdi:bell' fontSize={60} 
                  style={{ marginTop: "1.5rem", color: "#666cff",border:'solid',borderRadius:'50%',padding:'0.5rem'}} />

                </Grid>
                <Grid item xs={10}>
                  <h3 style={{ color: "black", fontWeight: "500" }}>See product updates</h3>
                  <p> Discover what we have been working on lately. </p>
                </Grid>

              </Grid>

            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={2}>
                  <Icon icon='mdi:play' fontSize={60} 
                  style={{ marginTop: "1.5rem", color: "#666cff",border:'solid',borderRadius:'50%',padding:'0.5rem'}} />

                </Grid>
                <Grid item xs={10}>
                  <h3 style={{ color: "black", fontWeight: "500" }}>Getting started</h3>
                  <p> Training videos and guides to get you started </p>
                </Grid>

              </Grid>

            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}



export default InvoiceAdd
