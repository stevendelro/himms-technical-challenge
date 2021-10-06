import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import Grid from '@material-ui/core/Grid'
import React, { useState } from 'react'
import Switch from '@material-ui/core/Switch'

import { updateReport } from '../actions/actionCreators'
import Report from './Report'

export const ReportsList = ({ reports, updateReport }) => {
  const [showResolved, setShowResolved] = useState(false)
  // listOfReports will produce an array of unresolved reports
  // if showResolved is true, it will include all resolved reports
  const listOfReports = reports.map((report, index) => {
    if (report.state !== 'RESOLVED') {
      return (
        <Report
          key={`report=${index}`}
          objectId={report._id}
          reportId={report.id.slice(24, report.id.length)}
          type={report.payload.reportType}
          status={report.state}
          message={report.payload.message}
          updateReport={updateReport}
        />
      )
    }
    if (showResolved) {
      return (
        <Report
          key={`report=${index}`}
          objectId={report._id}
          reportId={report.id.slice(24, report.id.length)}
          type={report.payload.reportType}
          status={report.state}
          message={report.payload.message}
          updateReport={updateReport}
        />
      )
    }
  })

  const toggleSwitch = (
    <FormGroup style={{ alignItems: 'center' }}>
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
      direction='column'
      alignContent='center'
      justifyContent='center'>
      {toggleSwitch}
      {listOfReports}
    </Grid>
  )
}

const mapStateToProps = store => ({
  reports: store.spam.reports,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateReport }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ReportsList)
