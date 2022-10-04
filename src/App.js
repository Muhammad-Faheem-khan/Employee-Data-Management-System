import { CssBaseline } from '@material-ui/core'
import React from 'react'
import Employee from './Components/EmployeeData/Employee/Employee'
import Header from './Components/Header'
import SideBar from './Components/SideBar'
import useStyles from './Components/Styles'

const App = () => {
  const classes = useStyles()
  return (
    <>
        <CssBaseline/>
        <div className= {classes.mainComponents}>
            <SideBar /> 
            <div className={classes.header}>
              <Header />
              <Employee />
            </div>
        </div>
    </>
  )
}

export default App
