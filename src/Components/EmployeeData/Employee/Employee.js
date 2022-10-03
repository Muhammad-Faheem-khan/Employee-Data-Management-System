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
    const [recordForEdit, setrecordForEdit] = useState(null)

    const handleAddNewEmployee=()=>{
       setopenPopUp(true)
       setrecordForEdit(null)
    }
     const handleWindowClose=()=>{
      setopenPopUp(false) 
     }
     const addAndEdit = (values, handleResetForm)=>{
      if(values.id===0) employeeService.insertEmployeeData(values)
        else employeeService.updateEmployee(values)
        setrecordForEdit(null)
        handleResetForm()
        setopenPopUp(false)
        setRecords(employeeService.getAllEmployees())
     }

     const openInPopup=(item)=>{
      setopenPopUp(true)
      setrecordForEdit(item)
     }
  return (
    <>
        <PageHeader  pagetitle= 'Employee'
              pagedescription='Page description'
              pageicon={<PeopleOutlineTwoTone fontSize='large'/>}
            />
            <Paper className={classes.formpage}>
            
            <EmployeeTable handleAddNewEmployee= {handleAddNewEmployee} record={record} openInPopup={openInPopup}/>
            </Paper>
            <PopUpWindow  openPopUp={openPopUp} handleWindowClose={handleWindowClose}>
            <EmployeeForm addAndEdit={addAndEdit} recordForEdit={recordForEdit}/>
            </PopUpWindow>
    </>
  )
}

export default Employee
