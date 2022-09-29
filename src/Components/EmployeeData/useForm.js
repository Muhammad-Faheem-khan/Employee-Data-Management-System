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
    console.log(values)

  return {
    values,
    setvalues,
    handleInputData
  }
}

export default useForm
