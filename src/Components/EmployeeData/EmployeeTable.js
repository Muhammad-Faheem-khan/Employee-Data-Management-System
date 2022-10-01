import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@material-ui/core'
import React, {useState} from 'react'
import * as employeeService from './EmployeeService'
import useStyles from './Styles'

const EmployeeTable = () => {
const classes = useStyles()
const pages = [5,10,15]
const [record, setRecords] = useState(employeeService.getAllEmployees())
const [page, setpage] = useState(0)
const [rowsPerPage, setrowsPerPage] = useState(pages[page])

   const headings = employeeService.headCells()
const handleChangePage=(event, newpage)=>{
  setpage(newpage)
}
const handleRowsperpage=event=>{
  setrowsPerPage(parseInt(event.target.value, 10))
  setpage(0)
}

const recordAfterpaging=(record)=>{
  record.slice(page*rowsPerPage, (page+1)*rowsPerPage)
}


  return (
    <TableContainer>
    <Table className={classes.table}>
        <TableHead >
         <TableRow className={classes.tr} style={{fontWeight: '1000'}}>
        {headings.map((headcell)=>(
          <TableCell key={headcell.id}>{headcell.heading}</TableCell>
        ))
        }
        </TableRow>
        </TableHead>
        <TableBody>
        { record.map((employee)=> (
        <TableRow className={classes.tr} key={employee.id}>
            <TableCell>{employee.fullName}</TableCell>
            <TableCell>{employee.email}</TableCell>
            <TableCell>{employee.mobileNo}</TableCell>
            <TableCell>{employee.department}</TableCell>
        </TableRow> )
        )
        }
        </TableBody>
        
    </Table>
    <TablePagination 
          component='div'
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={pages}
          count={record.length}
          onchange={handleChangePage}
          onChangeRowsPerPage={handleRowsperpage}
        />
    </TableContainer>
    
  )
}

export default EmployeeTable
