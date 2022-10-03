import React, {useState} from 'react'
import PageHeader from '../../PageHeader'
import EmployeeForm from './EmployeeForm'
import EmployeeTable from './EmployeeTable'
import PopUpWindow from './PopUpWindow'
import * as employeeService from '../EmployeeService'
import { Paper } from '@material-ui/core'
import {  PeopleOutlineTwoTone } from '@material-ui/icons'
import useStyles from '../Styles'


const Employee = () => {
  
  const [record, setRecords] = useState(employeeService.getAllEmployees())
    const classes = useStyles()
    const [openPopUp, setopenPopUp] = useState(false)

    const handleAddNewEmployee=()=>{
       setopenPopUp(true)
    }
     const handleWindowClose=()=>{
      setopenPopUp(false) 
     }
     const addAndEdit = (values, handleResetForm)=>{
      employeeService.insertEmployeeData(values)
        handleResetForm()
        setopenPopUp(false)
        setRecords(employeeService.getAllEmployees())
     }
  return (
    <>
        <PageHeader  pagetitle= 'Employee'
              pagedescription='Page description'
              pageicon={<PeopleOutlineTwoTone fontSize='large'/>}
            />
            <Paper className={classes.formpage}>
            
            <EmployeeTable handleAddNewEmployee= {handleAddNewEmployee} record={record}/>
            </Paper>
            <PopUpWindow  openPopUp={openPopUp} handleWindowClose={handleWindowClose}>
            <EmployeeForm addAndEdit={addAndEdit}/>
            </PopUpWindow>
    </>
  )
}

export default Employee
