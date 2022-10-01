import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React from 'react'
import * as employeeService from './EmployeeService'

const EmployeeTable = () => {

    const employees = employeeService.getAllEmployees()
  return (
    <TableContainer>
    <Table>
        <TableHead>
            <TableCell>Employee Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Mobile No</TableCell>
        </TableHead>
        <TableBody>
        { employees.map((employee)=> (
        <TableRow key={employee.id}>
            <TableCell>{employee.fullName}</TableCell>
            <TableCell>{employee.email}</TableCell>
            <TableCell>{employee.mobileNo}</TableCell>
        </TableRow> ))
        }
        </TableBody>
    </Table>
    </TableContainer>
  )
}

export default EmployeeTable
