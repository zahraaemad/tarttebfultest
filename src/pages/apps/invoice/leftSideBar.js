// ** React Imports
import { useState, useEffect } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** MUI Imports
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Chip from '@mui/material/Chip'
import Badge from '@mui/material/Badge'
import Drawer from '@mui/material/Drawer'
import MuiAvatar from '@mui/material/Avatar'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon';
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemButton from '@mui/material/ListItemButton'
import InputAdornment from '@mui/material/InputAdornment'
import Divider from '@mui/material/Divider';

// ** Third Party Components
import PerfectScrollbar from 'react-perfect-scrollbar'
import { styled } from '@mui/material/styles'
// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Import
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Chat App Components Imports
import UserProfileLeft from 'src/views/apps/properties/UserProfileLeft'

const ScrollWrapper = ({ children, hidden }) => {
  if (hidden) {
    return <Box sx={{ height: '100%', overflow: 'auto' }}>{children}</Box>
  } else {
    return <PerfectScrollbar options={{ wheelPropagation: false }}>{children}</PerfectScrollbar>
  }
}

// ** Styled Components
const ListItemStyled = styled(ListItem)(({ theme }) => ({
  borderLeftWidth: '3px',
  borderLeftStyle: 'solid',
  padding: theme.spacing(0, 5),
  marginBottom: theme.spacing(2)
}))

const SidebarLeft = props => {
  // ** Props
  const {
    store,
    hidden,
    mdAbove,
    dispatch,
    statusObj,
    userStatus,
    selectChat,
    getInitials,
    sidebarWidth,
    setUserStatus,
    leftSidebarOpen,
    removeSelectedChat,
    userProfileLeftOpen,
    formatDateToMonthShort,
    handleLeftSidebarToggle,
    handleUserProfileLeftSidebarToggle
  } = props

  // ** States
  const [query, setQuery] = useState('')
  const [filteredChat, setFilteredChat] = useState([])
  const [filteredContacts, setFilteredContacts] = useState([])
  const [active, setActive] = useState(null)

 

  return (
    <div>
      <Drawer
        open={leftSidebarOpen}
        onClose={handleLeftSidebarToggle}
        variant={mdAbove ? 'permanent' : 'temporary'}
        ModalProps={{
          disablePortal: true,
          keepMounted: true // Better open performance on mobile.
        }}
        sx={{
          zIndex: 7,
          height: '100%',
          display: 'block',
          position: mdAbove ? 'static' : 'absolute',
          '& .MuiDrawer-paper': {
            boxShadow: 'none',
            overflow: 'hidden',
            width: sidebarWidth,
            position: mdAbove ? 'static' : 'absolute',
            borderTopLeftRadius: theme => theme.shape.borderRadius,
            borderBottomLeftRadius: theme => theme.shape.borderRadius
          },
          '& > .MuiBackdrop-root': {
            borderRadius: 1,
            position: 'absolute',
            zIndex: theme => theme.zIndex.drawer - 1
          }
        }}
      >


        <Box sx={{ height: `calc(100% - 2.125rem)` }}>
          <ScrollWrapper hidden={hidden}>
            <Box sx={{ p: theme => theme.spacing(5, 3, 3) }}>
              <Typography variant='h6' sx={{ ml: 2, mb: 4, color: 'primary.main' }}>
                Properties
              </Typography>

              <List>
                <ListItemStyled >
                  <ListItemButton>

                    <ListItemText primary="New Properties" />
                  </ListItemButton>
                </ListItemStyled>
                <ListItemStyled >
                  <ListItemButton>
                    <ListItemText primary="Muted Properties" />
                  </ListItemButton>
                </ListItemStyled>


                <ListItem >
                  <ListItemButton>
                    <ListItemIcon>
                      <Icon icon='mdi:house-outline' style={{ color: "black", fontWeight: "600" }}></Icon>
                    </ListItemIcon>
                    <ListItemText >
                      <span style={{ color: "black", fontWeight: "600" }}> Room Types</span>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>


                <ListItemStyled >
                  <ListItemButton>

                    <ListItemText primary="All" />
                  </ListItemButton>
                </ListItemStyled>
                <ListItemStyled >
                  <ListItemButton>
                    <ListItemText primary="Entire Home" />
                  </ListItemButton>
                </ListItemStyled>
                <ListItemStyled >
                  <ListItemButton>
                    <ListItemText primary="Shared Room" />
                  </ListItemButton>
                </ListItemStyled>
                <ListItemStyled >
                  <ListItemButton>
                    <ListItemText primary="Private Room" />
                  </ListItemButton>
                </ListItemStyled>
                <ListItem >
                  <ListItemButton>
                    <ListItemIcon>
                      <Icon icon='mdi:tag-outline' style={{ color: "black", fontWeight: "600" }}></Icon>
                    </ListItemIcon>
                    <ListItemText >
                      <span style={{ color: "black", fontWeight: "600" }}> Tag</span>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </List>

            </Box>
          </ScrollWrapper>
        </Box>
      </Drawer>

      <UserProfileLeft
        store={store}
        hidden={hidden}
        statusObj={statusObj}
        userStatus={userStatus}
        sidebarWidth={sidebarWidth}
        setUserStatus={setUserStatus}
        userProfileLeftOpen={userProfileLeftOpen}
        handleUserProfileLeftSidebarToggle={handleUserProfileLeftSidebarToggle}
      />
    </div>
  )
}

export default SidebarLeft
