
import React, {useState} from 'react'

import * as employeeService from './EmployeeService'

const useForm = (initialData) => {
  const [values, setvalues] = useState(initialData)
  const [error, setError] = useState({})
    
    const handleInputData = e =>{
       const {name, value} = e.target
       validate(name)
       setvalues({
        ...values,
        [name]: value
       })
    }
    const handleInputCheckbox= e =>{
      setvalues({
        ...values,
        ispermanent: e.target.checked
      })
    }
    const handleInputDate=e=>{
      setvalues({
        ...values,
        hireDate: e.target.value
      })
    }
  

    const validate=(name='')=>{
      let temp={}
      console.log(name)
      if(name==='fullName') {temp.fullName = values.fullName?'':'This field is required'}
      else if(name==='email') {temp.email = (values.email ==='' || (/\S+@\S+\.\S+/).test(values.email))  ? '':'Email is not valid'}
      else if(name==='mobileNo'){  temp.mobileNo = values.mobileNo.length >= 10 ?'':'Required 11 digits minimum'}
      else if(name==='departmentId') {temp.departmentId = values.departmentId.length !==0 ?'':'This field is required'}
      
      else if(name==='all'){
      temp.fullName = values.fullName?'':'This field is required'
      temp.email = (values.email ==='' || (/\S+@\S+\.\S+/).test(values.email))  ? '':'Email is not valid'
      temp.mobileNo = values.mobileNo.length >= 10 ?'':'Required 11 digits minimum'
      temp.departmentId = values.departmentId.length !== 0 ?'':'This field is required'}
      
      setError({
        ...temp
      })
      return Object.values(temp).every((entry)=> entry==="")
    }

    const handleFormSubmit=(e)=>{
      e.preventDefault()
      if(validate('all')){
        employeeService.insertEmployeeData(values)
        handleResetForm()
      }
    }
    const handleResetForm=()=>{
      setvalues(initialData)
      setError({})
    }

  return {
    values,
    handleInputData,
    handleInputCheckbox,
    handleInputDate,
    handleFormSubmit,
    error,
    handleResetForm
  }
}

export default useForm
