// ** React Imports
import { useState, useEffect } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Alert from '@mui/material/Alert'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Button } from '@mui/material'


const InvoiceEdit = () => {

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6} md={1}>
        </Grid>
        <Grid item xs={6} md={11}>
          <span style={{ color: "black", fontWeight: "500", fontSize: "1.8rem" }}>Our apps</span>
          <Card style={{ marginTop: '2rem', marginBottom: '2rem' }} >
            <CardContent style={{ paddingBottom: '0rem' }}>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <h3 style={{ color: "black", fontWeight: "500" }}>Hospitable.com official mobile app</h3>
                  <p style={{ width: '80%' }}>Download Hospitable.com's mobile app to enjoy the benefits of Hospitable.com on the go. The app offers the same functionality you know and love from the desktop experience, plus the convenience of real-time push notifications for inbox messages.</p>
                  <Button variant='contained'
                    style={{ textTransform: "none", display: 'inline-block', marginRight: '2rem' }}
                    href='https://my.hospitable.com/support-documentation/article/5845339-direct-bookings-overview'
                  >App Store</Button>
                  <Button variant='contained'
                    style={{ textTransform: "none", display: 'inline-block' }}
                    href='https://my.hospitable.com/support-documentation/article/5845339-direct-bookings-overview'
                  >Google Play</Button>
                </Grid>
                <Grid item xs={4}>
                  <img src='https://my.hospitable.com/assets/images/apps-mobile-screenshots.svg'></img>

                </Grid>
              </Grid>

            </CardContent>
          </Card>

          <span style={{ color: "black", fontWeight: "500", fontSize: "1.8rem" }}>Integrations</span>
          <Grid container spacing={2} style={{  marginTop: '2rem'}}>
            <Grid item xs={6}>
              <Card>
                <CardContent>
                <h3 style={{ color: "black", fontWeight: "500"}}>First Appt</h3>
                <p>Connect your Autohost account to enable guest screening and background checks.</p>
                </CardContent>
              </Card>

            </Grid>
            <Grid item xs={6}>
              <Card>
                <CardContent>
                <h3 style={{ color: "black", fontWeight: "500"}}>Second App</h3>
                <p>Connect your Autohost account to enable guest screening and background checks.</p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card>
                <CardContent>
                <h3 style={{ color: "black", fontWeight: "500"}}>Third App</h3>
                <p>Connect your Autohost account to enable guest screening and background checks.</p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card>
                <CardContent>
                <h3 style={{ color: "black", fontWeight: "500"}}>Forth App</h3>
                <p>Connect your Autohost account to enable guest screening and background checks.</p>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </>
  )

}

export default InvoiceEdit
