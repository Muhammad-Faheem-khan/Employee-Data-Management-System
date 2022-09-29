import { FormControlLabel, Grid, RadioGroup, TextField, InputLabel,MenuItem, Radio, Select, FormControl, FormLabel } from '@material-ui/core'

import useStyles from './Styles'
import useForm  from './useForm'

const initialData = {
    id: '',
    fullName: '',
    email: '',
    mobileNo: '',
    gender: 'male',
    departmentId: '',
    hireDate: new Date(),
    ispermanent: 'false'
}

const department = ['Web Development', 'SQA', 'HR','Management']

const EmployeeForm = () => {
    const classes = useStyles()
    const {values, setvalues, handleInputData, handlegender} = useForm(initialData)
    console.log(values)

  return (
    <>
        <form autoComplete='off'>
            <Grid container >
                <Grid item xs ={6}>
                <TextField className={classes.inputdata} 
                name='fullName' 
                variant='outlined' 
                label='Full Name' 
                value={values.fullName} 
                onChange={handleInputData}></TextField>

                <TextField className={classes.inputdata} 
                name='email'  
                variant='outlined' 
                label='email ID' 
                value={values.email}
                onChange={handleInputData}
                ></TextField>

                <TextField className={classes.inputdata} 
                name='mobileNo'  
                variant='outlined' 
                label='Mobile NO.' 
                value={values.mobileNo}
                onChange={handleInputData}
                ></TextField>

                <TextField className={classes.inputdata} 
                name='Id'  
                variant='outlined' 
                label='ID' 
                value={values.id}
                onChange={handleInputData}
                ></TextField>
                </Grid>
                <Grid item xs={6}>
                    <FormControl>
                        <FormLabel>Gender</FormLabel>
                            <RadioGroup row name='gender' value={values.gender} onChange={handleInputData}>
                                <FormControlLabel value='male' label='Male' control={<Radio />}/>
                                <FormControlLabel value='female' label='Female' control={<Radio />}/>
                                <FormControlLabel value='other' label='Other' control={<Radio />}/>
                            </RadioGroup>      
                    </FormControl>
                    <FormControl fullWidth style={{marginTop: '10px'}}>
                         <InputLabel>Department</InputLabel>
                         <Select
                         name='departmentId'
                         value={values.departmentId}
                         label="Department"
                        onChange={handleInputData} >
                            {department.map((department)=>(
                                <MenuItem value={department}>{department}</MenuItem>
                            ))}
                            
                         </Select>
                    </FormControl>
                  
                </Grid>
            </Grid>
        </form>
    </>
  )
}

export default EmployeeForm
