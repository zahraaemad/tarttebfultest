const navigation = () => {
  return [
    
  
    {
      title: 'Inbox',
      icon: 'mdi:email-outline',
      path: '/apps/email'
    },
    {
      title: ' Properties ',
      icon: 'mdi:farm-house-outline',
      path: '/apps/chat'
    },
    {
      title: 'Calendar',
      icon: 'mdi:calendar-blank-outline',
      path: '/apps/calendar'
    },
    {
      title: ' Guest Experience ',
      icon: 'mdi:account-heart-outline',
      path: '/apps/invoice/list'
     
    },
    {
      title: ' Operations ',
      icon: 'mdi:check-all',
      path: '/apps/user/list'
     
    },
    {
      title: ' Metrics ',
      icon: 'mdi:state-machine',
      path: '/apps/roles'
     
    },
    {
      title: ' Connected accounts ',
      icon: 'mdi:key-variant',
      path: '/pages/user-profile/profile'
     
    },
    {
      title: ' Direct ',
      icon: 'mdi:message-arrow-right-outline',
      path: '/apps/invoice/preview'
    
    },
    {
      title: ' Apps ',
      icon: 'mdi:dots-square',
      path: '/apps/invoice/edit'
   
    },
    {
      title: ' Help ',
      icon: 'mdi:message-question-outline',
      path: '/pages/help-center'
   
    },
    {
      title: ' Settings ',
      icon: 'mdi:gear-outline',
      path: '/pages/account-settings/account'
   
    },
    
  ]
}

export default navigation
