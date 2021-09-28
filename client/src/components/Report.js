import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import React from 'react'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  paper: {
    maxWidth: theme.spacing(80),
    margin: theme.spacing(1),
    padding: theme.spacing(2),
  },
  secondColumn: {
    width: theme.spacing(36),
  },
  buttons: {
    '&:first-child': {
      marginBottom: theme.spacing(1),
    },
    minWidth: theme.spacing(120 / 8),
  },
  details: {
    color: '#0969da',
    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'underline'
    }
  }
}))

const Report = ({
  reportId,
  objectId,
  type,
  status,
  message,
  blockReport,
  resolveReport,
  reopenReport,
}) => {
  const classes = useStyles()

  // Change the functionality of the second button depending on the current report status.
  const handleStatusChange = reportId => {
    if (status === 'RESOLVED' || status === 'BLOCKED') {
      return reopenReport(reportId)
    }
    if (status === 'OPEN') return resolveReport(reportId)
  }
  return (
    <Paper className={classes.paper}>
      <Grid container direction='row' justifyContent='space-between'>
        <Grid item>
          <Typography variant='body1'>Id: {reportId}</Typography>
          <Typography variant='body1'>State: {status}</Typography>
          <Typography className={classes.details} variant='body1'>Details</Typography>
        </Grid>
        <Grid item className={classes.secondColumn}>
          <Typography variant='body1'>Type: {type}</Typography>
          <Typography variant='body1'>
            Message: {message ? message : 'No message'}
          </Typography>
        </Grid>
        <Grid item>
          <Grid
            container
            direction='column'
            justifyContent='space-between'
            alignItems='center'>
            <Button
              onClick={() => blockReport(objectId)}
              className={classes.buttons}
              variant='outlined'>
              Block
            </Button>
            <Button
              onClick={() => handleStatusChange(objectId)}
              className={classes.buttons}
              variant='outlined'>
              {/* Change the button text depending on the current report status */}
              {status === 'OPEN' && 'resolve'}
              {status === 'RESOLVED' && 'reopen'}
              {status === 'BLOCKED' && 'unblock'}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Report
