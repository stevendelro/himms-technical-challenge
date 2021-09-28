import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress'
import React, { useState } from 'react'
import Switch from '@material-ui/core/Switch'

import ReportsList from '../../components/ReportsList'

export default function Home({ loading }) {
  const [showResolved, setShowResolved] = useState(false)
  // prettier-ignore
  const spinnerSpacer = (
    loading
      ? <LinearProgress color='secondary' />
      : <div style={{ height: '4px' }}></div>
  )
  const toggleSwitch = (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            checked={showResolved}
            onChange={() => setShowResolved(!showResolved)}
            name='checkedA'
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
        }
        label='Show Resolved'
      />
    </FormGroup>
  )
  return (
    <Grid
      container
      direction='row'
      justifyContent='flex-start'
      alignItems='flex-start'>
      {spinnerSpacer}
      <ReportsList showResolved={showResolved} />
      {toggleSwitch}
    </Grid>
  )
}
