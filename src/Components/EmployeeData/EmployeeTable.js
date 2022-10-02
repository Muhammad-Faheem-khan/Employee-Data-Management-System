import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel } from '@material-ui/core'
import React, {useState} from 'react'
import * as employeeService from './EmployeeService'
import useStyles from './Styles'

const EmployeeTable = () => {
    const classes = useStyles()
    const pages = [5,10,15]
    const [record, setRecords] = useState(employeeService.getAllEmployees())
    const [page, setpage] = useState(0)
    const [rowsPerPage, setrowsPerPage] = useState(pages[page])
    const [order, setorder] = useState('asc')
    const [orderBy, setorderBy] = useState('')


    const labels = employeeService.headCells()
    const handleChangePage=(event, newpage)=>{
          setpage(newpage)
          }
    const handleRowsperpage=event=>{
          setrowsPerPage(parseInt(event.target.value, 10))
          setpage(0)
          }
          
    const createSortHandler = id =>{
          const isAsc = orderBy === id && order === "asc"
          setorder(isAsc ? "desc":"asc")
          setorderBy(id)
    } 
    function descendingComparator(a, b, orderBy) {
      if (b[orderBy] < a[orderBy]) {
        return -1;
      }
      if (b[orderBy] > a[orderBy]) {
        return 1;
      }
      return 0;
    }
    
    function getComparator(order, orderBy) {
  
      return order === "desc" ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy)
    }
    const sortedAndPagingData =  record.slice(page*rowsPerPage, (page + 1)*rowsPerPage).sort(getComparator(order, orderBy))


  return (
    <TableContainer>
      <Table className={classes.table}>
        <TableHead >
          <TableRow>
          {labels.map((headcell)=>(
            <TableCell key={headcell.id} sortDirection={orderBy===headcell.id?order:false}>
            <TableSortLabel
              active={orderBy === headcell.name}
              direction={orderBy === headcell.name ? order : 'asc'}
              onClick={()=> {createSortHandler(headcell.name)}}
            >
              {headcell.label}
              </TableSortLabel>
            </TableCell>
          ))}
          </TableRow>
        </TableHead>
        <TableBody>
          { sortedAndPagingData.map((employee)=> (
          <TableRow className={classes.tr} key={employee.id}>
            <TableCell>{employee.fullName}</TableCell>
            <TableCell>{employee.email}</TableCell>
            <TableCell>{employee.mobileNo}</TableCell>
            <TableCell>{employee.department}</TableCell>
          </TableRow> ))}
        </TableBody>
        
      </Table>
      <TablePagination 
          component='div'
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={pages}
          count={record.length}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleRowsperpage}
        />
    </TableContainer>
    
  )
}

export default EmployeeTable
