import { Card, Paper, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './Styles'

const PageHeader = ({pagetitle, pagedescription, pageicon}) => {
    const classes = useStyles()

  return (
    <Paper round='true' elevation={0} className={classes.pageheader}>
        <div className={classes.pagehead}>
            <Card className={classes.pageicon}>
            {pageicon}
            </Card>
            <div className={classes.pagetitle}>
                <Typography variant='h6' component='div'>
                {pagetitle}
                </Typography>
                <Typography variant='subtitle2' component='div'>
                {pagedescription}
                </Typography>
            </div>
        </div>
    </Paper>
  )
}

export default PageHeader
