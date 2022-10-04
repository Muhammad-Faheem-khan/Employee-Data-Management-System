import React, {useState} from 'react'
import PageHeader from '../../PageHeader'
import EmployeeForm from './EmployeeForm'
import EmployeeTable from './EmployeeTable'
import PopUpWindow from './PopUpWindow'
import * as employeeService from '../EmployeeService'
import { Paper } from '@material-ui/core'
import {  PeopleOutlineTwoTone } from '@material-ui/icons'
import useStyles from '../Styles'
import Notification from '../../Notifications/Notification'
import ConfirnDialog from '../../Notifications/ConfirnDialog'


const Employee = () => {
  
  const [record, setRecords] = useState(employeeService.getAllEmployees())
    const classes = useStyles()
    const [openPopUp, setopenPopUp] = useState(false)
    const [recordForEdit, setrecordForEdit] = useState(null)
    const [notify, setNotify] = useState({isopen: false, message: '', type:''})
    const [confirmDialog, setConfirmDialog] = useState({isOpen: false, title: '', subtitle:''})

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
        setNotify({
          isOpen: true,
          message: 'Submitted Successfully',
          type: 'Success'
        })
        setRecords(employeeService.getAllEmployees())
     }

     const openInPopup=(item)=>{
      setopenPopUp(true)
      setrecordForEdit(item)
     }

     const deleteEmployee=(id)=>{
        employeeService.deleteEmployeeData(id)
        setRecords(employeeService.getAllEmployees())
        setNotify({
          isOpen: true,
          message: 'Deleted Successfully',
          type: 'error'          
        })
      }
     

     const deningConfirmDialog=()=>{
      setConfirmDialog({
        ...confirmDialog,
        isOpen: false
      })
     }

     const handleDeletingData=()=>{
      setConfirmDialog({
        title: 'Are you sure to delete Data?',
        subtitle: "You will not be able to undo.",
        isOpen: true
      })
     }
  return (
    <>
        <PageHeader  pagetitle= 'Employee'
              pagedescription='Employee Data Management System'
              pageicon={<PeopleOutlineTwoTone fontSize='large'/>}
            />
            <Paper className={classes.formpage}>
            
            <EmployeeTable handleAddNewEmployee= {handleAddNewEmployee} 
            record={record} openInPopup={openInPopup} 
            handleDeletingData={handleDeletingData}

            />
            </Paper>
            <PopUpWindow  openPopUp={openPopUp} handleWindowClose={handleWindowClose}>
            <EmployeeForm addAndEdit={addAndEdit} recordForEdit={recordForEdit}/>
            </PopUpWindow>
            <Notification notify={notify} setNotify={setNotify}/>
            <ConfirnDialog confirmDialog={confirmDialog} 
                            deleteEmployee={deleteEmployee}
                            deningConfirmDialog={deningConfirmDialog}
            />
    </>
  )
}

export default Employee
