import { CssBaseline } from '@material-ui/core'
import React from 'react'
import Employee from './Components/EmployeeData/Employee'
import Header from './Components/Header'
import SideBar from './Components/SideBar'
import useStyles from './Components/Styles'



const App = () => {
  const classes = useStyles()
  return (
        <>
            <CssBaseline />
            <SideBar />
            <div className={classes.header}>
            <Header />
            <Employee />
            </div>
            
            
            
            
        </>
  )
}

export default App
