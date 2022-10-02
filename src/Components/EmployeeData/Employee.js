import React, {useState} from 'react'
import PageHeader from '../PageHeader'
import EmployeeForm from './EmployeeForm'
import EmployeeTable from './EmployeeTable'
import PopUpWindow from './PopUpWindow'
import { Paper } from '@material-ui/core'
import { PeopleOutlineTwoTone } from '@material-ui/icons'
import useStyles from './Styles'


const Employee = () => {
    const classes = useStyles()
    const [openPopUp, setopenPopUp] = useState(false)

    const handleAddNewEmployee=()=>{
       setopenPopUp(true)
    }
     const handleWindowClose=()=>{
      setopenPopUp(false) 
     }
  return (
    <>
        <PageHeader  pagetitle= 'Employee'
              pagedescription='Page description'
              pageicon={<PeopleOutlineTwoTone fontSize='large'/>}
            />
            <Paper className={classes.formpage}>
            
            <EmployeeTable handleAddNewEmployee= {handleAddNewEmployee}/>
            </Paper>
            <PopUpWindow  openPopUp={openPopUp} handleWindowClose={handleWindowClose}>
            <EmployeeForm />
            </PopUpWindow>
    </>
  )
}

export default Employee
