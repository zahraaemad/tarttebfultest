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
      <span style={{ color: "black", fontWeight: "500", fontSize: "1.8rem" }}>Our apps</span>
      <Card style={{ marginTop: '2rem', marginBottom: '2rem', height: '20rem' }} >
        <CardContent style={{ paddingBottom: '0rem' }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <h3 style={{ color: "black", fontWeight: "500" }}>Tatrteebful.com. official mobile app</h3>
              <p style={{ width: '80%' }}>Download Hospitable.com's mobile app to enjoy the benefits of Hospitable.com on the go. The app offers the same functionality you know and love from the desktop experience, plus the convenience of real-time push notifications for inbox messages.</p>
              <Button variant='contained'
                style={{ textTransform: "none", display: 'inline-block', marginRight: '2rem' }}
              >App Store</Button>
              <Button variant='contained'
                style={{ textTransform: "none", display: 'inline-block' }}
              >Google Play</Button>
            </Grid>
            <Grid item xs={4}>
              <img src='https://my.hospitable.com/assets/images/apps-mobile-screenshots.svg'></img>

            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <span style={{ color: "black", fontWeight: "500", fontSize: "1.8rem" }}>Integrations</span>
      <Grid container spacing={2} style={{ marginTop: '2rem' }}>
        <Grid item xs={6}>
          <Card style={{ height: '10rem' }}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={2} >
                  <img src='https://my.hospitable.com/assets/images/apps/mailchimp.png' style={{ width: '5rem' }}></img>
                </Grid>
                <Grid item xs={10} >
                  <h3 style={{ color: "black", fontWeight: "500" }}>Mailchimp</h3>
                  <p>Send guest details to a MailChimp list.</p>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

        </Grid>
        <Grid item xs={6}>
          <Card style={{height: '10rem'}}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={2} >
                  <img src='https://my.hospitable.com/assets/images/apps/flightaware.png' style={{ width: '5rem' }}></img>
                </Grid>
                <Grid item xs={10} >
                  <h3 style={{ color: "black", fontWeight: "500" }}>Flightaware</h3>
                  <p>Receive alerts about your guest's flight status on the day of the flight.</p>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card style={{height: '10rem'}}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={2} >
                  <img src='https://my.hospitable.com/assets/images/apps/pricelabs-badge.png' style={{ width: '5rem' }}></img>
                </Grid>
                <Grid item xs={10} >
                  <h3 style={{ color: "black", fontWeight: "500" }}>PriceLabs</h3>
                  <p>Integrate with PriceLabs dynamic pricing tools.</p>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card style={{ height: '10rem'}}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={2} >
                  <img src='https://my.hospitable.com/assets/images/apps/integrations/autohost.png' style={{ width: '5rem' }}></img>
                </Grid>
                <Grid item xs={10} >
                  <h3 style={{ color: "black", fontWeight: "500" }}>Autohost</h3>
                  <p>Connect your Autohost account to enable guest screening and background checks.</p>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card style={{height: '10rem'}}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={2} >
                  <img src='https://my.hospitable.com/assets/images/apps/integrations/schlage.svg' style={{ width: '5rem' }}></img>
                </Grid>
                <Grid item xs={10} >
                  <h3 style={{ color: "black", fontWeight: "500" }}>Schlage Encode</h3>
                  <p>Connect your Schlage Encode smart locks to generate and send PIN codes to guests.</p>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

        </Grid>
        <Grid item xs={6}>
          <Card style={{ height: '10rem'}}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={2} >
                  <img src='https://my.hospitable.com/assets/images/apps/integrations/remote-lock.svg' style={{ width: '5rem' }}></img>
                </Grid>
                <Grid item xs={10} >
                  <h3 style={{ color: "black", fontWeight: "500" }}>RemoteLock</h3>
                  <p>Connect your August, Yale or RemoteLock smart locks to generate and send PIN codes to guests.</p>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card style={{height: '10rem'}}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={2} >
                  <img src='https://my.hospitable.com/assets/images/apps/integrations/august-lock.svg' style={{ width: '5rem' }}></img>
                </Grid>
                <Grid item xs={10} >
                  <h3 style={{ color: "black", fontWeight: "500" }}>August</h3>
                  <p>Connect your August smart locks to generate and send PIN codes to guests.</p>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card style={{height: '10rem'}}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={2} >
                  <img src='	https://my.hospitable.com/assets/images/apps/integrations/yale.svg' style={{ width: '5rem' }}></img>
                </Grid>
                <Grid item xs={10} >
                  <h3 style={{ color: "black", fontWeight: "500" }}>Yale</h3>
                  <p>Connect your Yale smart locks to generate and send PIN codes to guests.</p>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>


    </>
  )

}

export default InvoiceEdit
