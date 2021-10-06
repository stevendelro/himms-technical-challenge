import axios from 'axios'

import * as actions from './actions'

const fetchReportsStarted = () => ({
  type: actions.FETCH_REPORTS_STARTED,
})

const fetchReportsSuccess = () => ({
  type: actions.FETCH_REPORTS_SUCCESS,
})

const updateReportError = error => ({
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
      dispatch({ type: actions.FETCH_REPORTS_ERROR, payload: error })
    })
}

export const updateReport = (update, reportId) => dispatch => {
  let axiosMethod
  // Change the API call depending on the type of update
  if (update === 'block')
    axiosMethod = axios.post(
      `http://localhost:3000/reports/block/${reportId}/BLOCKED`
    )
  if (update === 'resolve')
    axiosMethod = axios.put(
      `http://localhost:3000/reports/${reportId}/RESOLVED`
    )
  if (update === 'reopen')
    axiosMethod = axios.post(
      `http://localhost:3000/reports/reopen/${reportId}/OPEN`
    )

  dispatch(fetchReportsStarted())
  axiosMethod
    .then(response => {
      dispatch(fetchReportsSuccess())
      dispatch({
        type: actions.UPDATE_REPORT,
        payload: response.data.updatedReport,
      })
    })
    .catch(error => {
      console.error(`${update}Report error: `, error)
      dispatch(updateReportError(error))
    })
}
