import { Dialog, DialogActions, DialogContent, DialogTitle,Button, Typography, IconButton } from '@material-ui/core'
import useStyles from '../Styles'
import React from 'react'
import { NotListedLocation } from '@material-ui/icons'

const ConfirnDialog = ({confirmDialog, deleteEmployee, deningConfirmDialog}) => {

    const classes = useStyles()
  return (
    <Dialog open={confirmDialog.isOpen}
            className={classes.confirmdialog}>
        <DialogTitle >
             <IconButton disableRipple size='medium' style={{marginLeft: '100px'}}>
                <NotListedLocation fontSize='large' />
            </IconButton>
        </DialogTitle>
        <DialogContent>
            <Typography variant='h6'>{confirmDialog.title}</Typography>
            <Typography variant='subtitle2'>{confirmDialog.subtitle}</Typography>
        </DialogContent>
        <DialogActions>
            <Button variant='contained' color= 'secondary' 
            onClick={deningConfirmDialog}
            >No</Button>
            <Button variant='contained' color= 'primary' onClick={()=>{deleteEmployee(confirmDialog.id)}}>Yes</Button>
        </DialogActions>
    </Dialog>
  )
}

export default ConfirnDialog
