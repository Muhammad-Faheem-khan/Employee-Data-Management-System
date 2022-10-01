import { FormControlLabel, Grid, RadioGroup, TextField, InputLabel,MenuItem, Radio, 
    Select, FormControl, FormLabel, FormGroup, Checkbox, Button, Box, FormHelperText } from '@material-ui/core'
    import { format } from 'date-fns'
import { getdepartments } from './EmployeeService'
import useStyles from './Styles'
import useForm  from './useForm'

const initialData = {
    id: '',
    fullName: '',
    email: '',
    mobileNo: '',
    gender: 'male',
    city: '',
    departmentId: '',
    hireDate: (format(new Date(), 'yyyy-MM-dd')),
    ispermanent: false
}
const department = getdepartments()

const genders = [{id: 'male', gender: 'Male'},
                {id: 'female', gender: 'Female'},
                {id: 'other', gender: 'Other'}]

const EmployeeForm = () => {
    const classes = useStyles()
    const {values, handleInputData, handleInputDate, handleInputCheckbox, 
           error, handleFormSubmit, handleResetForm} = useForm(initialData)
    
  return (
    <>
        <form autoComplete='off' onSubmit={handleFormSubmit}>
            <Grid container >
                <Grid item xs ={6}>
                <TextField className={classes.inputdata} 
                name='fullName' 
                variant='outlined' 
                label='Full Name' 
                value={values.fullName} 
                onChange={handleInputData}
                {...(error.fullName && {error:true,
                    helperText: error.fullName})}
                     >
                </TextField>

                <TextField className={classes.inputdata} 
                name='email'  
                variant='outlined' 
                label='email ID' 
                value={values.email}
                onChange={handleInputData}
                {...(error.email && {error:true,
                    helperText: error.email})}
                ></TextField>

                <TextField className={classes.inputdata} 
                name='mobileNo' 
                variant='outlined' 
                label='Mobile NO.' 
                value={values.mobileNo}
                onChange={handleInputData}
                {...(error.mobileNo && {
                    error:true,
                    helperText: error.mobileNo
                })}
                ></TextField>

                <TextField className={classes.inputdata} 
                name='city'  
                variant='outlined' 
                label='City' 
                value={values.city}
                onChange={handleInputData}
                ></TextField>
                </Grid>
                <Grid item xs={6}>
                    <FormControl>
                        <FormLabel>Gender</FormLabel>
                            <RadioGroup row name='gender' value={values.gender} onChange={handleInputData}>
                            {genders.map((item)=>(
                                <FormControlLabel key={item.id} value={item.id} label={item.gender} control={<Radio />}/>
                            ))}
                            </RadioGroup>      
                    </FormControl>
                    <FormControl  style={{marginTop: '10px', width: '80%'}} {...(error.departmentId && {error:true})}>
                         <InputLabel>Department</InputLabel>
                         <Select
                         name='departmentId'
                         value={values.departmentId}
                         label="Department"
                        onChange={handleInputData} >
                            {department.map((department)=>(
                                <MenuItem key={department.id} value={department.id}>{department.depart}</MenuItem>
                            ))}
                         </Select>
                         {error.departmentId && <FormHelperText>{error.departmentId}</FormHelperText>}
                    </FormControl>

                    <Box className={classes.dateContainer}>
                        <TextField id='date'
                        label= 'Date of Joining'
                        type='date'
                        fullWidth
                        variant='outlined'
                        defaultValue={values.hireDate}
                        InputLabelProps={{
                            shrink: true
                        }} onChange={handleInputDate}
                        >
                        </TextField>
                    </Box>

                    <FormGroup>
                         <FormControlLabel control={<Checkbox name='ispermanent' checked={values.ispermanent}
                          onChange={handleInputCheckbox}/>} label="Permanent Employee" />
                    </FormGroup>

                    <div className={classes.buttondiv}>
                    <Button className={classes.formButton} type='button' variant='outlined' onClick={handleResetForm}>Reset</Button>
                    <Button className={classes.formButton} type='submit' variant='contained' color='primary'>Submit</Button>
                </div>
                  
                </Grid>
                
            </Grid>
        </form>
    </>
  )
}

export default EmployeeForm
