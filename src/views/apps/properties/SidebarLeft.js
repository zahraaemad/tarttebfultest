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

  // ** Hooks
  const router = useRouter()

  const handleChatClick = (type, id) => {
    dispatch(selectChat(id))
    setActive({ type, id })
    if (!mdAbove) {
      handleLeftSidebarToggle()
    }
  }
  useEffect(() => {
    if (store && store.chats) {
      if (active !== null) {
        if (active.type === 'contact' && active.id === store.chats[0].id) {
          setActive({ type: 'chat', id: active.id })
        }
      }
    }
  }, [store, active])
  useEffect(() => {
    router.events.on('routeChangeComplete', () => {
      setActive(null)
      dispatch(removeSelectedChat())
    })

    return () => {
      setActive(null)
      dispatch(removeSelectedChat())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const hasActiveId = id => {
    if (store.chats !== null) {
      const arr = store.chats.filter(i => i.id === id)

      return !!arr.length
    }
  }

  const renderChats = () => {
    if (store && store.chats && store.chats.length) {
      if (query.length && !filteredChat.length) {
        return (
          <ListItem>
            <Typography sx={{ color: 'text.secondary' }}>No Chats Found</Typography>
          </ListItem>
        )
      } else {
        const arrToMap = query.length && filteredChat.length ? filteredChat : store.chats

        return arrToMap.map((chat, index) => {
          const { lastMessage } = chat.chat
          const activeCondition = active !== null && active.id === chat.id && active.type === 'chat'

          return (
            <ListItem key={index} disablePadding sx={{ '&:not(:last-child)': { mb: 1.5 } }}>
              <ListItemButton
                disableRipple
                onClick={() => handleChatClick('chat', chat.id)}
                sx={{
                  px: 2.5,
                  py: 2.5,
                  width: '100%',
                  borderRadius: 1,
                  alignItems: 'flex-start',
                  ...(activeCondition && { backgroundColor: theme => `${theme.palette.primary.main} !important` })
                }}
              >

                <ListItemText
                  sx={{
                    my: 0,
                    ml: 4,
                    mr: 1.5,
                    '& .MuiTypography-root': { ...(activeCondition && { color: 'common.white' }) }
                  }}
                  primary={
                    <Typography noWrap sx={{ ...(!activeCondition ? { color: 'text.secondary' } : {}) }}>
                      {chat.fullName}
                    </Typography>
                  }
                  secondary={
                    <Typography noWrap variant='body2' sx={{ ...(!activeCondition && { color: 'text.disabled' }) }}>
                      {lastMessage ? lastMessage.message : null}
                    </Typography>
                  }
                />
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    flexDirection: 'column',
                    justifyContent: 'flex-start'
                  }}
                >
                  <Typography sx={{ whiteSpace: 'nowrap', color: activeCondition ? 'common.white' : 'text.disabled' }}>
                    <>{lastMessage ? formatDateToMonthShort(lastMessage.time, true) : new Date()}</>
                  </Typography>
                  {chat.chat.unseenMsgs && chat.chat.unseenMsgs > 0 ? (
                    <Chip
                      color='error'
                      label={chat.chat.unseenMsgs}
                      sx={{
                        mt: 0.5,
                        height: 18,
                        fontWeight: 600,
                        fontSize: '0.75rem',
                        '& .MuiChip-label': { pt: 0.25, px: 1.655 }
                      }}
                    />
                  ) : null}
                </Box>
              </ListItemButton>
            </ListItem>
          )
        })
      }
    }
  }

  const renderContacts = () => {
    if (store && store.chats && store.chats.length) {
      if (query.length && !filteredContacts.length) {
        return (
          <ListItem>
            <Typography sx={{ color: 'text.secondary' }}>No Contacts Found</Typography>
          </ListItem>
        )
      } else {
        const arrToMap = query.length && filteredContacts.length ? filteredContacts : store.contacts

        return arrToMap !== null
          ? arrToMap.map((contact, index) => {
            const activeCondition =
              active !== null && active.id === contact.id && active.type === 'contact' && !hasActiveId(contact.id)

            return (
              <ListItem key={index} disablePadding sx={{ '&:not(:last-child)': { mb: 1.5 } }}>
                <ListItemButton
                  disableRipple
                  onClick={() => handleChatClick(hasActiveId(contact.id) ? 'chat' : 'contact', contact.id)}
                  sx={{
                    px: 2.5,
                    py: 2.5,
                    width: '100%',
                    borderRadius: 1,
                    ...(activeCondition && { backgroundColor: theme => `${theme.palette.primary.main} !important` })
                  }}
                >
                  <ListItemAvatar sx={{ m: 0 }}>
                    {contact.avatar ? (
                      <MuiAvatar
                        alt={contact.fullName}
                        src={contact.avatar}
                        sx={{
                          width: 40,
                          height: 40,
                          outline: theme =>
                            `2px solid ${activeCondition ? theme.palette.common.white : 'transparent'}`
                        }}
                      />
                    ) : (
                      <CustomAvatar
                        color={contact.avatarColor}
                        skin={activeCondition ? 'light-static' : 'light'}
                        sx={{
                          width: 40,
                          height: 40,
                          fontSize: '1rem',
                          outline: theme =>
                            `2px solid ${activeCondition ? theme.palette.common.white : 'transparent'}`
                        }}
                      >
                        {getInitials(contact.fullName)}
                      </CustomAvatar>
                    )}
                  </ListItemAvatar>
                  <ListItemText
                    sx={{
                      my: 0,
                      ml: 4,
                      ...(activeCondition && { '& .MuiTypography-root': { color: 'common.white' } })
                    }}
                    primary={
                      <Typography sx={{ ...(!activeCondition ? { color: 'text.secondary' } : {}) }}>
                        {contact.fullName}
                      </Typography>
                    }
                    secondary={
                      <Typography noWrap variant='body2' sx={{ ...(!activeCondition && { color: 'text.disabled' }) }}>
                        {contact.about}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
            )
          })
          : null
      }
    }
  }

  const handleFilter = e => {
    setQuery(e.target.value)
    if (store.chats !== null && store.contacts !== null) {
      const searchFilterFunction = contact => contact.fullName.toLowerCase().includes(e.target.value.toLowerCase())
      const filteredChatsArr = store.chats.filter(searchFilterFunction)
      const filteredContactsArr = store.contacts.filter(searchFilterFunction)
      setFilteredChat(filteredChatsArr)
      setFilteredContacts(filteredContactsArr)
    }
  }

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
                <ListItem >
                  <ListItemButton>

                    <ListItemText primary="New Properties" />
                  </ListItemButton>
                </ListItem>
                <ListItem >
                  <ListItemButton>
                    <ListItemText primary="Muted Properties" />
                  </ListItemButton>
                </ListItem>


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


                <ListItem >
                  <ListItemButton>

                    <ListItemText primary="All" />
                  </ListItemButton>
                </ListItem>
                <ListItem >
                  <ListItemButton>
                    <ListItemText primary="Entire Home" />
                  </ListItemButton>
                </ListItem>
                <ListItem >
                  <ListItemButton>
                    <ListItemText primary="Shared Room" />
                  </ListItemButton>
                </ListItem>
                <ListItem >
                  <ListItemButton>
                    <ListItemText primary="Private Room" />
                  </ListItemButton>
                </ListItem>
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
