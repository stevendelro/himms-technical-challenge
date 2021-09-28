import axios from 'axios'

import * as actions from './actions'

export const fetchReportsStarted = () => ({
  type: actions.FETCH_REPORTS_STARTED,
})

export const fetchReportsSuccess = () => ({
  type: actions.FETCH_REPORTS_SUCCESS,
})

export const updateReportError = error => ({
  type: actions.UPDATE_REPORT_ERROR,
  payload: error,
})

export const fetchReports = () => dispatch => {
  // Toggle loading to true, display a loading indicator.
  dispatch(fetchReportsStarted())
  axios
    .get('http://localhost:3000/reports')
    .then(response => {
      // Toggle loading to false, remove loading indicator.
      dispatch(fetchReportsSuccess())
      // Update redux store with API data
      dispatch({
        type: actions.FETCH_REPORTS,
        payload: response.data,
      })
    })
    .catch(error => {
      console.error('fetchReports error: ', error)
      dispatch({
        type: actions.FETCH_REPORTS_ERROR,
        payload: error,
      })
    })
}

// Same functionality as above, different endpoint.
export const blockReport = reportId => dispatch => {
  dispatch(fetchReportsStarted())
  axios
    .post(`http://localhost:3000/reports/block/${reportId}`)
    .then(response => {
      dispatch(fetchReportsSuccess())
      dispatch({
        type: actions.BLOCK_REPORT,
        payload: response.data,
      })
    })
    .catch(error => {
      console.error('blockReport error: ', error)
      dispatch(updateReportError(error))
    })
}

// Same functionality as above, different endpoint.
export const resolveReport = reportId => dispatch => {
  dispatch(fetchReportsStarted())
  axios
    .put(`http://localhost:3000/reports/${reportId}`)
    .then(response => {
      dispatch(fetchReportsSuccess())
      dispatch({
        type: actions.RESOLVE_REPORT,
        payload: response.data,
      })
    })
    .catch(error => {
      console.error('resolveReport error: ', error)
      dispatch(updateReportError(error))
    })
}

// Same functionality as above, different endpoint.
export const reopenReport = reportId => dispatch => {
  dispatch(fetchReportsStarted())
  axios
    .post(`http://localhost:3000/reports/reopen/${reportId}`)
    .then(response => {
      dispatch(fetchReportsSuccess())
      dispatch({
        type: actions.REOPEN_REPORT,
        payload: response.data,
      })
    })
    .catch(error => {
      console.error('reopenReport error: ', error)
      dispatch(updateReportError(error))
    })
}
