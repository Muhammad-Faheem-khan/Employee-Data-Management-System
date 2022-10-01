

const KEYS ={
    employeeId: 'employeeId',
    employees: 'employees'
}
export function getdepartments(){
        
    return  [{id: 1, depart: 'Web Development'},
                {id: 2,depart: 'SQA'},
                {id:3, depart: 'HR'},
                {id: 4, depart: 'Management'}]
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

        return JSON.parse(localStorage.getItem(KEYS.employees))
    }

   

 

