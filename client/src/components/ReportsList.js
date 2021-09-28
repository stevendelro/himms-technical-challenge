import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import React from 'react'

import {
  blockReport,
  resolveReport,
  reopenReport,
} from '../actions/actionCreators'
import Report from './Report'

export const ReportsList = ({
  reports,
  blockReport,
  resolveReport,
  reopenReport,
  showResolved,
}) => {
  // listOfReports will produce an array of unresolved reports
  // if showResolved is true, it will include all resolved reports
  const listOfReports = reports.map((report, index) => {
    if (showResolved) {
      return (
        <Report
          key={`report=${index}`}
          objectId={report._id}
          reportId={report.id.slice(24, report.id.length)}
          type={report.payload.reportType}
          status={report.state}
          message={report.payload.message}
          blockReport={blockReport}
          resolveReport={resolveReport}
          reopenReport={reopenReport}
        />
      )
    }
    if (report.state !== 'RESOLVED') {
      return (
        <Report
          key={`report=${index}`}
          objectId={report._id}
          reportId={report.id.slice(24, report.id.length)}
          type={report.payload.reportType}
          status={report.state}
          message={report.payload.message}
          blockReport={blockReport}
          resolveReport={resolveReport}
          reopenReport={reopenReport}
        />
      )
    }
  })

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
      reopenReport,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(ReportsList)
