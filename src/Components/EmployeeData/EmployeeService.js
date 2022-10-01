

const KEYS ={
    employeeId: 'employeeId',
    employees: 'employees'
}
export function getdepartments(){
        
    return  [{id: '1', depart: 'Web Development'},
                {id: '2', depart: 'SQA'},
                {id: '3', depart: 'HR'},
                {id: '4', depart: 'Management'}]

}
export function headCells(){
        
    return      [{id: '1', label: 'Employee Name'},
                {id: '2', label: 'Email'},
                {id: '3', label: 'Conatct No.'},
                {id: '4', label: 'Department'}]

}

    export function insertEmployeeData(data){
        let employees = getAllEmployees();
        data['id']= generateEmployeeId()
        employees.push(data)
        localStorage.setItem(KEYS.employees, JSON.stringify(employees))
    }
    export function generateEmployeeId() {
        if(localStorage.getItem(KEYS.employeeId)==null)
        localStorage.setItem(KEYS.employeeId, '0')
        var id = parseInt(localStorage.getItem(KEYS.employeeId))
        localStorage.setItem(KEYS.employeeId, (++id).toString())

        return id;
    }
    export function getAllEmployees() {
        if(localStorage.getItem(KEYS.employees)==null)
        localStorage.setItem(KEYS.employees, JSON.stringify([]))

        const employees = JSON.parse(localStorage.getItem(KEYS.employees))
        let departments = getdepartments()
         employees.map( x =>(
                x['department'] = departments[x.departmentId - 1].depart
        ))
        return employees
    }

    export function recordAfterpaging(a,b,c,d) {
        
       return stableSort(a, b)
    .slice(c*d, (c + 1)*d)
    }

    
    // functions for sorting Objects
    
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
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  
  // This method is created for cross-browser compatibility, if you don't
  // need to support IE11, you can use Array.prototype.sort() directly
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

   

 

