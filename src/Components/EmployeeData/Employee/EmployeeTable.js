import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination,TextField, TableRow, 
  TableSortLabel,  Toolbar, InputAdornment, Button } from '@material-ui/core'
import { Add, Close, EditOutlined, Search } from '@material-ui/icons'
import React, {useState} from 'react'
import * as employeeService from '../EmployeeService'
import useStyles from '../Styles'

const EmployeeTable = ({handleAddNewEmployee, record, openInPopup, handleDeletingData}) => {

    const classes = useStyles()
    const pages = [5,10,15]
    const [page, setpage] = useState(0)
    const [rowsPerPage, setrowsPerPage] = useState(pages[page])
    const [order, setorder] = useState('asc')
    const [orderBy, setorderBy] = useState('')
    const [filterFn, setfilterFn] = useState({fn: items=>{return items}})

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

    const handleEmployeeSearch=(e)=>{
      let target = e.target
          setfilterFn({ fn: items =>{
            if(target.value==='') return items
            else return items.filter(x => x.fullName.toLowerCase().includes(target.value))
          }})
    }

//Sorting Functions//
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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const sortedAndPagingData =  filterFn.fn(record).slice(page*rowsPerPage, 
      (page + 1)*rowsPerPage).sort(getComparator(order, orderBy))

  return (
    <>    
    <TableContainer>
      <Toolbar className={classes.searchToolbar}>
      <TextField label='Search Employee'
                className={classes.employeeSearch}
                name='employeeSearch'
                variant='outlined'
                InputProps={{
                    startAdornment: ( <InputAdornment position= 'start'>
                                      <Search  /> 
                                  </InputAdornment>) 
                }}
                onChange={handleEmployeeSearch}
                >
      </TextField> 
      <Button variant='outlined' 
              type='button'
              className={classes.addButton}
              startIcon= {
                <Add />
              }
              onClick={handleAddNewEmployee}
      >Add new</Button>

      </Toolbar>
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
            <TableCell>
            <div style={{display: 'flex'}}>
              <Button variant='outlined' 
              className={classes.actionBtnedit}
              onClick={()=>{openInPopup(employee)}}
              >
              <EditOutlined fontSize='small'/>
              </Button>
              <Button variant='outlined'  
              className={classes.actionBtndelete}
              onClick={handleDeletingData}>
              <Close fontSize='small'/>
              </Button>
              </div>
            </TableCell>
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
    </>

  )
}

export default EmployeeTable
