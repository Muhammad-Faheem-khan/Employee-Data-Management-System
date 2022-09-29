import React from 'react'
import {useState} from 'react'

const useForm = (initialData) => {
  const [values, setvalues] = useState(initialData)
    
console.log(initialData)
    const handleInputData = e =>{
       const {name, value} = e.target
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
    
    
    console.log(values)

  return {
    values,
    setvalues,
    handleInputData,
    handleInputCheckbox,
    handleInputDate
  }
}

export default useForm
