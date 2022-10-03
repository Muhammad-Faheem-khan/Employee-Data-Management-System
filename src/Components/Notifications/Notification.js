import { Snackbar } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import React from 'react'

const Notification = ({notify, setNotify}) => {
    const handleclose=()=>{
        setNotify({
            ...notify,
            isOpen: false
        })
    }
  return (
    <Snackbar open={notify.isOpen} 
    autoHideDuration={3000}
    anchorOrigin={{vertical: 'top', horizontal: 'right'}}
    onClose={handleclose}
    style={{top: '85px', right: '30px'}}
    >
        <Alert severity={notify.type}
        onClose={handleclose}>
            {notify.message}
        </Alert>
    </Snackbar>
  )
}

export default Notification
