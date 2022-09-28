import { CssBaseline } from '@material-ui/core'
import React from 'react'
import Header from './Header'
import SideBar from './SideBar'

const App = () => {
  return (
        <>
            <CssBaseline />
            <SideBar />
            <Header />
        </>
  )
}

export default App
