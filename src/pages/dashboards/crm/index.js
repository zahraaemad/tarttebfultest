// ** MUI Imports
import Grid from '@mui/material/Grid'
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Component Import
import CardStatisticsVertical from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import CrmAward from 'src/views/dashboards/crm/CrmAward'


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


const CrmDashboard = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ApexChartWrapper>


      <CrmAward />
      <Grid container spacing={6} className='match-height'>
        <Grid item xs={12} sm={3} md={3}>
          <CardStatisticsVertical
            stats='0'
            title='Inquiries'
          />
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <CardStatisticsVertical
            stats='0'
            title='Requests to book'
          />
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <CardStatisticsVertical
            stats='0'
            title='Scheduled messages'
          />
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <CardStatisticsVertical
            stats='0'
            title='Unassigned tasks'
          />
        </Grid>

      </Grid>

      <Box sx={{ width: '100%', marginTop: '3rem' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Check-ins"  {...a11yProps(0)} />
            <Tab label="Check-outs" {...a11yProps(1)} />
            <Tab label="Tasks" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0} style={{ textAlign: "center" }}>
          <Card sx={{height:'20rem'}}>
            <CardContent sx={{ marginTop:"8rem" }} >
              <Typography variant='h8' sx={{ color: "black"}}>
              You don't have any upcoming check-ins at the moment
              </Typography>
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={value} index={1} style={{ textAlign: "center" }}>
        <Card sx={{height:'20rem'}}>
            <CardContent  sx={{ marginTop:"8rem" }} >
              <Typography variant='h8' sx={{ color: "black" }}>
              You don't have any upcoming check-outs at the moment
              </Typography>
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={value} index={2} style={{ textAlign: "center" }}>
        <Card sx={{height:'20rem'}}>
            <CardContent  sx={{ marginTop:"8rem" }}  >
              <Typography variant='h8' sx={{ color: "black"}}>
              You don't have any tasks at the moment
              </Typography>
            </CardContent>
          </Card>
        </TabPanel>
      </Box>
    </ApexChartWrapper>
  )
}

export default CrmDashboard
