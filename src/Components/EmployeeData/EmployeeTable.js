import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React, {useState} from 'react'
import * as employeeService from './EmployeeService'

const EmployeeTable = () => {
const [record, setRecords] = useState(employeeService.getAllEmployees())
   const headings = employeeService.headCells()
  return (
    <TableContainer>
    <Table>
        <TableHead>
         <TableRow>
        {headings.map((headcell)=>(
          <TableCell id={headcell.id}>{headcell.heading}</TableCell>
        ))
        }
        </TableRow>
        </TableHead>
        <TableBody>
        { record.map((employee)=> (
        <TableRow key={employee.id}>
            <TableCell>{employee.fullName}</TableCell>
            <TableCell>{employee.email}</TableCell>
            <TableCell>{employee.mobileNo}</TableCell>
            <TableCell>{employee.department}</TableCell>
        </TableRow> )
        )
        }
        </TableBody>
    </Table>
    </TableContainer>
  )
}

export default EmployeeTable
