// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// Styled component for the trophy image
const TrophyImg = styled('img')(({ theme }) => ({
  right: 22,
  bottom: 0,
  width: 106,
  position: 'absolute',
  [theme.breakpoints.down('sm')]: {
    width: 95
  }
}))

const CrmAward = () => {
  return (
    <Card sx={{ position: 'relative' ,margin:"0.3rem",marginBottom:"2rem"}}>
      <CardContent>
        <Typography variant='h5' sx={{ marginBottom:"2rem",color:"black" }}>
          Good morning, Ahmed

        </Typography>
        <Typography variant='p'>
          Here is what's happening with your business today
        </Typography>
       
      </CardContent>
    </Card>
  )
}

export default CrmAward
