import {useState, useEffect} from 'react'

const useForm = (initialData, addAndEdit, recordForEdit) => {
  const [values, setvalues] = useState(initialData)
  const [error, setError] = useState({})
    
    const handleInputData = e =>{
       const {name, value} = e.target
       setvalues({
        ...values,
        [name]: value
       })
       validate(name)
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
      
      else if(name==='all'){
      temp.fullName = values.fullName?'':'This field is required'
      temp.email = (values.email ==='' || (/\S+@\S+\.\S+/).test(values.email))  ? '':'Email is not valid'
      temp.mobileNo = values.mobileNo.length >= 10 ?'':'Required 11 digits minimum'}
      
      setError({
        ...temp
      })
      return Object.values(temp).every((entry)=> entry==="")
    }

    const handleFormSubmit=(e)=>{
      e.preventDefault()
      if(validate('all')){
       addAndEdit(values, handleResetForm)
      }
    }
    const handleResetForm=()=>{
      setvalues(initialData)
      setError({})
    }

    useEffect(()=>{
      if(recordForEdit != null){
          setvalues({
              ...recordForEdit
          })
      }
  },[recordForEdit])


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
