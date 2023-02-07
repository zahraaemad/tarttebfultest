import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Button } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
function UserProfileTab() {
  return (
    <>
      <h2 style={{ color: "black", fontWeight: "500" }}>Connect an account</h2>
      <Grid container spacing={6} className='match-height'>

        <Grid item xs={12} sm={3} md={3}>
          <ConnectedAccounts
            imgSrc='https://1000logos.net/wp-content/uploads/2017/08/Airbnb-logo.jpg'
            content='Connect your Airbnb account with Hospitable.com.'
            btn='Connect with Airbnb'
          />

        </Grid>
        <Grid item xs={12} sm={3} md={3}>

          <ConnectedAccounts
            imgSrc='https://www.buildupbookings.com/wp-content/uploads/2019/10/vrbo-logo.png'
            content='Connect your Vrbo account with Hospitable.com.'
            btn='Connect with Vrbo'
          />
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <ConnectedAccounts
            imgSrc='https://www.anchorbayguesthouse.com/wp-content/uploads/2014/05/Booking-com-Logo-EPS-vector-image.png'
            content='Connect your Booking account with Hospitable.com.'
            btn='Connect with Booking'
          />
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <ConnectedAccounts
            imgSrc='https://p.kindpng.com/picc/s/25-253792_invite-friends-and-partners-svg-png-icon-free.png'
            content='Connect youraccount with Hospitable.com.'
            btn='Invite host'
          />
        </Grid>
      </Grid>
      <h2 style={{ color: "black", fontWeight: "500",marginTop:"3rem" }}>Connected Accounts</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Accounts</TableCell>
              <TableCell align="right">Platform</TableCell>
              <TableCell align="right">Listings</TableCell>
              <TableCell align="right"></TableCell>

            </TableRow>
          </TableHead>
          <TableBody>

            <TableRow

              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">Ahmed</TableCell>
              <TableCell align="right">Airbnb</TableCell>
              <TableCell align="right">1</TableCell>
              <TableCell align="right">Edit</TableCell>

            </TableRow>

          </TableBody>
        </Table>
      </TableContainer>

    </>)
}



export default UserProfileTab;

function ConnectedAccounts({ imgSrc, content, btn }) {
  return (
    <Card style={{ textAlign: "center" }}>
      <CardContent>
        <img src={imgSrc} style={{ height: "7rem" }}></img>
        <p>{content}</p>
        <Button variant='contained' style={{ width: "85%", textTransform: "none" }}>{btn}</Button>
      </CardContent>
    </Card>

  )
}