import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress'
import React from 'react'

import ReportsList from '../../components/ReportsList'

export default function Home({ loading }) {
  // prettier-ignore
  const spinnerSpacer = (
    loading
      ? <LinearProgress color='secondary' />
      : <div style={{ height: '4px' }}></div>
  )

  return (
    <>
      {spinnerSpacer}
      <Grid
        container
        direction='row'
        justifyContent='flex-start'
        alignItems='flex-start'>
        <ReportsList />
      </Grid>
    </>
  )
}
