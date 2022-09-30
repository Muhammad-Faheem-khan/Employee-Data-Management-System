import React from 'react'
import PageHeader from '../PageHeader'
import EmployeeForm from './EmployeeForm'
import { Paper } from '@material-ui/core'
import { PeopleOutlineTwoTone } from '@material-ui/icons'
import useStyles from './Styles'


const Employee = () => {
    const classes = useStyles()
  return (
    <>
        <PageHeader  pagetitle= 'Employee'
              pagedescription='Page description'
              pageicon={<PeopleOutlineTwoTone fontSize='large'/>}
            />
            <Paper className={classes.formpage}>
            <EmployeeForm />
            </Paper>
    </>
  )
}

export default Employee