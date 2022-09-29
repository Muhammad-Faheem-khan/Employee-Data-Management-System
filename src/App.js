import { CssBaseline } from '@material-ui/core'
import { PeopleOutlineTwoTone } from '@material-ui/icons'
import React from 'react'
import Header from './Header'
import PageHeader from './PageHeader'
import SideBar from './SideBar'
import useStyles from './Styles'



const App = () => {
  const classes = useStyles()
  return (
        <>
            <CssBaseline />
            <SideBar />
            <div className={classes.header}>
            <Header />
            <PageHeader  pagetitle= 'Page Header'
              pagedescription='Page description'
              pageicon={<PeopleOutlineTwoTone fontSize='large'/>}
            />
            </div>
            
            
            
            
        </>
  )
}

export default App
