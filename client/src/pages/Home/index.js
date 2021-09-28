import LinearProgress from '@material-ui/core/LinearProgress'
import React from 'react'

import ReportsList from '../../components/ReportsList'

export default function Home({ loading }) {
  return (
    <>
      {loading ? <LinearProgress color='secondary' /> : <div style={{ height: '4px'}}></div>}
      <ReportsList />
    </>
  )
}
