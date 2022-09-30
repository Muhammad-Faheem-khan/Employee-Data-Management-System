import { AppBar, Grid, IconButton, InputBase,  Badge, Toolbar } from '@material-ui/core'
import { ChatBubbleOutline, NotificationsNone, PowerSettingsNew, Search } from '@material-ui/icons'
import React from 'react'
import useStyles from './Styles'

const Header = () => {
    const classes = useStyles()
  return (       
            <AppBar position='static' className={classes.appbar}>
                <Toolbar>
                    <Grid container alignItems='center'>
                         <Grid item >
                            <InputBase className={classes.searchbar} placeholder='Search here'
                              startAdornment={ <Search fontSize='small' /> }
                            />
                         </Grid>
                         <Grid item sm></Grid>
                         <Grid item >
                         <IconButton>
                         <Badge badgeContent={4} color='secondary' fontSize='small' overlap='rectangular'>
                          <NotificationsNone  fontSize='small' />
                         </Badge>
                         </IconButton>

                         <IconButton>
                         <Badge badgeContent={4} color='primary' fontSize='small' overlap='rectangular'>
                          <ChatBubbleOutline fontSize='small'/>
                         </Badge>
                         </IconButton>

                         <IconButton>
                          <PowerSettingsNew fontSize='small' />
                         </IconButton>
                        </Grid>
                     </Grid>
                </Toolbar>
            </AppBar>
            

      
  )
}

export default Header
