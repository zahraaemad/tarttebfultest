// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const CardStatsVertical = props => {
  // ** Props
  const { title, stats} = props

  return (
    <Card>
      <CardContent >
       <Typography variant='h4' sx={{color:"black"}}>{stats}</Typography>
       <Typography variant='h6' sx={{color:"#666CFF"}}>{title}</Typography>
           
      </CardContent>
    </Card>
  )
}

export default CardStatsVertical
