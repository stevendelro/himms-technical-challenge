import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import React from 'react'

import { blockReport, resolveReport } from '../actions/actionCreators'
import Report from './Report'

export const ReportsList = ({ reports, blockReport, resolveReport }) => {
  const listOfReports = reports.map((report, index) => (
    <Report
      key={`report=${index}`}
      objectId={report._id}
      reportId={report.id.slice(24, report.id.length)}
      type={report.payload.reportType}
      status={report.state}
      message={report.payload.message}
      blockReport={blockReport}
      resolveReport={resolveReport}
    />
  ))

  return <Grid>{listOfReports}</Grid>
}

const mapStateToProps = store => ({
  reports: store.spam.reports,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      blockReport,
      resolveReport,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(ReportsList)
