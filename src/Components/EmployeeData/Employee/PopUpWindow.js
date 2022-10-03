import { Button, Dialog, DialogContent, DialogTitle, Typography} from '@material-ui/core'
import { Close } from '@material-ui/icons'
import React from 'react'
import useStyles from '../Styles'

const PopUpWindow = ({children, openPopUp, handleWindowClose}) => {
    const classes = useStyles()

  return (
    <Dialog open={openPopUp} maxWidth='md' className={classes.dialogWrapper}>
        <DialogTitle style={{paddingRight: '0px'}} >
            <div style={{display: 'flex'}} >
            <Typography variant='h6' component='div' style={{flexGrow: 1}}>
                Employee Form
            </Typography>
            <Button variant='contained' onClick={handleWindowClose} className={classes.actionBtndelete}><Close /></Button>
            </div>
        </DialogTitle>
        <DialogContent dividers >
            {children}
        </DialogContent>
    </Dialog>
  )
}

export default PopUpWindow
